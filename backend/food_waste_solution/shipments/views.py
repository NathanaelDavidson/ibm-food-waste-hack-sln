import time

from django.shortcuts import render
from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import views
from rest_framework.response import Response
from . import models
from food_waste_solution.blockchain_client import SellerClient
from food_waste_solution.blockchain_client import BuyerClient

from shipments import img_store


@method_decorator(csrf_exempt, name='dispatch')
class ContractAccept(views.APIView):
    def post(self, request, *args, **kwargs):
        offer_id = request.data.get('offerId')
        if offer_id is None:
            return Response(status=400)
        resp = SellerClient.accept_contract(request.user.pk, offer_id)
        return Response(resp.json(), status=resp.status_code)


@method_decorator(csrf_exempt, name='dispatch')
class ContractCancel(views.APIView):
    def post(self, request, *args, **kwargs):
        contract_id = request.data.get('contractId')
        if contract_id is None:
            return Response(status=400)
        resp = BuyerClient.cancel_offer(contract_id)
        return Response(resp.json(), status=resp.status_code)


@method_decorator(csrf_exempt, name='dispatch')
class ContractCreate(views.APIView):
    def post(self, request, *args, **kwargs):
        shipment_id = request.data.get('shipmentId')
        temp_threshold = request.data.get('tempThreshold')
        ambient_temp_threshold = request.data.get('ambientTempThreshold')
        co2_threshold = request.data.get('co2Threshold')
        voc_threshold = request.data.get('vocThreshold')
        freshness_threshold = request.data.get('freshnessThreshold')
        price = request.data.get('price')
        if (shipment_id is None or temp_threshold is None or
            co2_threshold is None or voc_threshold is None or
                freshness_threshold is None or price is None):
            return Response(status=400)
        resp = BuyerClient.init_contract(request.user.pk, shipment_id,
                                         temp_threshold, ambient_temp_threshold, co2_threshold, voc_threshold, freshness_threshold,
                                         price)
        return Response(resp.json(), status=resp.status_code)


@method_decorator(csrf_exempt, name='dispatch')
class ContractDecline(views.APIView):
    def post(self, request, *args, **kwargs):
        contract_id = request.query_params.get('contractId')
        if contract_id is None:
            return Response(status=400)
        resp = SellerClient.decline_offer(contract_id)
        return Response(resp.json(), resp.status_code)


@method_decorator(csrf_exempt, name='dispatch')
class ContractDetail(views.APIView):
    def get(self, request, *args, **kwargs):
        contract_id = request.query_params('contractId')
        if contract_id is None:
            return Response(status=400)
        resp = SellerClient.view_contract(contract_id)
        return Response(resp.json(), status=resp.status_code)


@method_decorator(csrf_exempt, name='dispatch')
class PendingOffersList(views.APIView):
    def get(self, request, *args, **kwargs):
        return SellerClient.get_pending_offers(request.user.pk)


@method_decorator(csrf_exempt, name='dispatch')
class ShipmentCreate(views.APIView):
    def post(self, request, *args, **kwargs):
        filename = None
        quantity = request.data.get('quantity')
        units = request.data.get('units')
        source = request.data.get('source')
        destination = request.data.get('destination')
        if not (quantity and units and source and destination):
            return Response(status=400)
        timestamp = int(time.time())
        filename = str(request.user.id) + str(timestamp)
        if request.FILES:
            key, val = request.FILES.popitem()
            img_url = img_store.upload_file(val[0], filename)
        shipment = models.Shipment.objects.create(
            seller=request.user,
            primary_img_url=img_url
        )
        resp = SellerClient.create_shipment(
            request.user.pk, quantity, units, source, destination, img_url)
        if resp.status != 200:
            img_store.delete_file(filename)
            shipment.delete()
        return Response(resp.json(), status=resp.status_code)


@method_decorator(csrf_exempt, name='dispatch')
class ShipmentDetail(views.APIView):
    def delete(self, request, *args, **kwargs):
        shipment_id = request.query_params.get('shipmentId')
        if not shipment_id:
            return Response(status=400)
        resp = SellerClient.get_shipment(shipment_id)
        return Response(resp.json(), status=resp.status_code)


@method_decorator(csrf_exempt, name='dispatch')
class ShipmentList(views.APIView):
    def get(self, request, *args, **kwargs):
        resp = BuyerClient.get_all_shipments()
        return Response(resp.json(), status=resp.status_code)


@method_decorator(csrf_exempt, name='dispatch')
class ShipmentListBySeller(views.APIView):
    def get(self, request, *args, **kwargs):
        resp = SellerClient.get_shipments_by_seller(request.user.pk)
        return Response(resp.json(), status=resp.status_code)
