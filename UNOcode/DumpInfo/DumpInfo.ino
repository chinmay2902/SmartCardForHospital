//Viral Science
//RFID
#include <SPI.h>
#include <MFRC522.h>
#include <Servo.h>
 
#define SS_PIN 10
#define RST_PIN 9
#define LED_G 4 //define green LED pin
#define LED_R 5 //define red LED
#define BUZZER 2 //buzzer pin
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.
Servo myServo; //define servo name
 
void setup() 
{
  Serial.begin(9600);   // Initiate a serial communication
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
  myServo.attach(3); //servo pin
  myServo.write(0); //servo start position
  pinMode(LED_G, OUTPUT);
  pinMode(LED_R, OUTPUT);
  pinMode(BUZZER, OUTPUT);
  noTone(BUZZER);
  Serial.println("Put your card to the reader...");
  Serial.println();

}
void loop() 
{
  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
  //Show UID on serial monitor
  Serial.print("UID tag :");
  String content= "";
  byte letter;
  String cardID="";
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
//    cardID+=mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ";
//    cardID+=mfrc522.uid.uidByte[i]+HEX;
//    cardID+=String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
//    cardID+=String(mfrc522.uid.uidByte[i], HEX);
     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
     Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  Serial.println();
//  Serial.println("CardID:",cardID);
  Serial.print("Message : ");
  content.toUpperCase();
  if (content.substring(1) == "E3 4D 8D 00"||content.substring(1) == "73 E0 7A 1E") 
  {
    Serial.println("Authorized Patient");
    Serial.println("http://localhost:3000/633731b05170aade54f92d47");
    Serial.println();
    delay(500);
    digitalWrite(LED_G, HIGH);
    tone(BUZZER, 500);
    delay(400);
    noTone(BUZZER);
    myServo.write(180);
    delay(5000);
    myServo.write(0);
    digitalWrite(LED_G, LOW);
  }
 
 else   { 
    Serial.println("Unauthorized User");
    digitalWrite(LED_R, HIGH);
    tone(BUZZER, 300);
    delay(1200);
    digitalWrite(LED_R, LOW);
    noTone(BUZZER);
  }
} 
