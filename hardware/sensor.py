import serial
import json
import os
import random
##from twilio.rest import Client
import time
import requests
import pygame


def getReading(portname, baud):


    ##ser = serial.Serial('COM24', 115200)

    ser = serial.Serial(portname, baud)

    print ("connected to: " + ser.portstr)
    reading = {}

    while True:
        line = ser.readline()
        print("read a line")
        line = line.decode('utf8')
        ##line = line [2:13]
        ##line = line.replace(" ", "")
        line=line.rstrip()
        ##print(line)

        if line.count("#") != 2:
            print (line.count("##"))
            continue
        if line.count("?") != 2:
            continue
        line = line [2:30]
        line = line.replace("?", "")
        ##print(line)

        words = line.split(',')
        if "0.00" in words or len(words) != 5:
            continue
        
        ##for word in words:
            ##print(word)
        reading["gas"] = words[0]
        reading["ambient"] = words[1]
        reading["object"] = words[2]
        reading["humidity"] = words[3]
        reading["external"] = words[4]

        print (reading)

        return reading
        


getReading('COM24', 115200)
