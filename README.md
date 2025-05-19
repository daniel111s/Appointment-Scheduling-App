# Meetly – effortless meeting scheduling
Meetly is an  **web&mobile** application that lets you arrange any meeting—professional or personal—in seconds, without endless email chains.

## Key features
- **Personal booking page** – create once, share a single link forever
- **One‑click reservations** – invitees choose a slot, no account needed
- **Share via QR code ** – guests can simply scan the code generated in‑app to open your calendar (the classic link   still works too)
- **Automatic reminders ** – confirmations and reminder emails go out automatically
- **Timezone detection** – everyone sees available times in their own zone
- **Calendar sync** – Google & Outlook two‑way integration
- **Fully responsive & native** – identical workflow in the browser and in the React Native app (iOS / Android)

## Screenshots
![image](https://github.com/user-attachments/assets/47aef817-3e3b-4dca-9248-ad4c17438477)
![image](https://github.com/user-attachments/assets/10bd1741-e31c-4c0a-a1e4-ad7601310df5)
![image](https://github.com/user-attachments/assets/fdadf5b8-70a0-4038-a481-be39e8b82622)
![image](https://github.com/user-attachments/assets/4e934e07-f2f3-4e43-a323-d23adbaa1973)
![image](https://github.com/user-attachments/assets/0db6e793-fc0d-4e37-9ea3-5bbcda51144d)
![image](https://github.com/user-attachments/assets/a9e014bf-b7f6-45dd-aef1-36cefa23e4f0)
![image](https://github.com/user-attachments/assets/62011593-6c4d-4881-898e-32187d4e2882)
![image](https://github.com/user-attachments/assets/3775d4a9-02ba-4aae-9de1-58616ffc059e)

https://github.com/user-attachments/assets/d6aa4672-8d34-4971-8370-bbcf77cda165

![257e390d-1a1c-4874-8f14-f4838c019d5a](https://github.com/user-attachments/assets/cf14275a-b217-4eec-81fb-aa97bc1018bc)
![8d2a4175-7ffa-4b63-aec0-4ec4a6201ce9](https://github.com/user-attachments/assets/f36780d2-39dc-4f7e-816d-4d2521fc1c1f)
![a0e67cbf-0315-4309-8a86-9de104610c95](https://github.com/user-attachments/assets/2a19f1ca-08c0-417e-8b5f-75aa1d860481)

## Tech stack:

### Backend
- Java
- Spring Boot
- Spring Data JPA
- PostgreSQL database

### Web
- React
- TailwindCSS

### Mobile
- React Native
- NativeWind

## How to run?

#### Backend
##### Create a database
```
psql -U postgres
CREATE DATABASE calendly;
GRANT ALL PRIVILEGES ON DATABASE "calendly" TO postgres;
```

#### Web
```
cd frontend
npm install
npm start
```
Make sure frontend runs on default port 3000.

#### Mobile
```
npm install -g expo-cli
```

```
cd mobile
npm install
npm start
```
