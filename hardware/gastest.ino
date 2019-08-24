int s0 = A0;

void setup() {
  

  pinMode (s0, INPUT);

  Serial.begin(115200);

}

void loop() {
  // put your main code here, to run repeatedly:
  int gasVal = analogRead(s0);

  Serial.print("Gas reading: ");
  Serial.print(gasVal);
  Serial.println();

  delay(500);

}
