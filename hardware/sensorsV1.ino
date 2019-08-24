#include <Wire.h>
#include <Adafruit_MLX90614.h>
#include "DHT.h"

#define DHTPIN 7     // what digital pin we're connected to
#define DHTTYPE DHT11   // DHT 11

int d; //delay counter
float h, t, f, hif, hic;

DHT dht(DHTPIN, DHTTYPE);

Adafruit_MLX90614 mlx = Adafruit_MLX90614();
int s0 = A0;
int gasVal = 0;

void setup() {
  Serial.begin(115200);

  Serial.println("Freship Sensors");  
  
  h = 0.0;
  f = 0.0;
  t = 0.0;
  hic = 0.0;
  hif = 0.0;
  d = 0;
  mlx.begin();  
  int s0 = A0;
  dht.begin();
}

void loop() {

  d += 200;

  if (d==2000) {
    d = 0; //reset delay
  }


  if (d%2000 == 0) {
  // Wait a few seconds between measurements.
  
  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  t = dht.readTemperature();
  // Read temperature as Fahrenheit (isFahrenheit = true)
  f = dht.readTemperature(true);

  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  // Compute heat index in Fahrenheit (the default)
  hif = dht.computeHeatIndex(f, h);
  // Compute heat index in Celsius (isFahreheit = false)
  hic = dht.computeHeatIndex(t, h, false);
  }

  gasVal = analogRead(s0);


  
  
  Serial.print("Gas reading: ");
  Serial.print(gasVal);
  Serial.println();
  
  Serial.print("Ambient Internal Temperature: "); Serial.print(mlx.readAmbientTempC()); 
  Serial.print("*C\nObject Temperature: "); Serial.print(mlx.readObjectTempC()); Serial.println("*C");
  //Serial.print("Ambient = "); Serial.print(mlx.readAmbientTempF()); 
  //Serial.print("*F\tObject = "); Serial.print(mlx.readObjectTempF()); Serial.println("*F");

  Serial.println();

  Serial.print("Humidity: ");

  Serial.print(h);
  Serial.println(" %");
  Serial.print("External Temperature: ");
  Serial.print(t);
  Serial.println(" *C ");
  Serial.print("Heat index: ");
  Serial.print(hic);
  Serial.println(" *C ");

  
  delay(1000);
}

