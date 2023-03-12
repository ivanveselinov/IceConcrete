#/bin/bash

echo "Installing Everything we need for a react project"

echo "Installing Craco !!"
npm install craco; sleep 2;

echo "Craco has been instaled"

echo "Installing React Hooks !!"
npm install react-hooks; sleep 2;
echo "React Hooks have been instaled"

echo "Installing React-Routher-Dom"
npm i react-router-dom; sleep 2;
echo "React Routher Dom has been instaled"

echo "Installing Firebase !!"
npm i firebase@8.10.0;
npm install firebase-react-hooks@3.0.4; sleep 2;
echo "Firebase has been instaled"

echo "INSTALLING ENV !!"
npm install dotenv; sleep 2;
echo "ENV has been instaled"

echo "Install MUI Components !!"
npm install @mui/material @emotion/react @emotion/styled; 
npm install @mui/material @mui/styled-engine-sc styled-components;
npm install @mui/icons-material; sleep 2;
echo "MUI Components have been installed"


