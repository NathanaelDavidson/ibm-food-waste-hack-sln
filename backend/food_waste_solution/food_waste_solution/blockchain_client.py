import requests
from django.conf import settings

MASTER_URL = '52.116.36.178'
port = 8003 if settings.PRODUCTION else 8001
base_url = f'http://{MASTER_URL}:{port}'


class BlockchainClientBase:
    @staticmethod
    def view_contract(contract_id):
        return requests.post(base_url + '/viewcontract', {'contractId': contract_id})

    @staticmethod
    def get_shipment(shipment_id):
        return requests.post(base_url + '/getshipment', {'shipmentId': shipment_id})


class SellerClient(BlockchainClientBase):
    @staticmethod
    def accept_contract(seller_id, offer_id):
        return requests.post(base_url + '/acceptcontract', {
            'sellerId': seller_id,
            'offerId': offer_id
        })

    @staticmethod
    def create_shipment(seller_id, quantity, units, source, destination, image_url):
        return requests.post(base_url + '/createshipment', data={
            'sellerId': seller_id,
            'quantity': {
                'value': quantity,
                'units': units
            },
            'source': source,
            'destination': destination,
            'image': image_url
        })

    @staticmethod
    def decline_offer(contract_id):
        return requests.post(base_url + '/declinecontract', {
            'contractId': contract_id
        })

    @staticmethod
    def get_pending_offers(seller_id):
        return requests.post(base_url + '/getpending', {'sellerId': seller_id})

    @staticmethod
    def get_shipments_by_seller(seller_id):
        return requests.post(base_url + '/getshipmentsbyseller', {'sellerId': seller_id})

    @staticmethod
    def register_seller(company_name, industry, product):
        return requests.post(base_url + '/registerseller', {
            'companyName': company_name,
            'industry': industry,
            'product': product
        })


class BuyerClient(BlockchainClientBase):
    @staticmethod
    def cancel_offer(contract_id):
        return requests.post(base_url + '/canceloffer', data={
            'contractId': contract_id
        })

    @staticmethod
    def get_all_shipments():
        return requests.post(base_url + '/getallshipments', {'sellerId': 'all'})

    @staticmethod
    def init_contract(buyer_id, shipment_id, temp_threshold, ambient_temp_threshold, co2_threshold,
                      voc_threshold, freshness_threshold, price, status='pending'):
        return requests.post(base_url + '/initcontract', {
            'buyerId': buyer_id,
            'shipmentId': shipment_id,
            'tempThreshold': temp_threshold,
            'ambientTempThreshold': ambient_temp_threshold,
            'co2Threshold': co2_threshold,
            'vocThreshold': voc_threshold,
            'freshnessThreshold': freshness_threshold,
            'price': price,
            'status': status
        })

    @staticmethod
    def register_buyer(company_name, industry):
        return requests.post(base_url + '/registerbuyer', {'companyName': company_name, 'industry': industry})
