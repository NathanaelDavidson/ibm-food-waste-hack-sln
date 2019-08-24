import serial
import json
import os
import random
##from twilio.rest import Client
import time
import requests
import pygame



ser = serial.Serial('COM24', 115200)

print ("connected to: " + ser.portstr)


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
    
    for word in words:
        print(word)
    
