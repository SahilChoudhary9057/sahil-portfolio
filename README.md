<<<<<<< HEAD
# Sahil Choudhary – Portfolio (React + Vite)

## Run on your computer
```
npm install      (only if node_modules is missing)
npm run dev
```
Open the link shown in the terminal (usually http://localhost:5173).

## Contact form – make it send real emails (one time, 2 minutes)
1. Go to https://web3forms.com and enter your email (Sahilchoudhary7477@gmail.com).
2. They email you an **Access Key**. Copy it.
3. Open `src/data.js` and replace `PASTE_YOUR_WEB3FORMS_KEY_HERE` with that key:
   `formKey: "your-key-here",`
4. Done. Every message from the form now arrives in your inbox,
   with the visitor's email set as the reply address.

(Until the key is added, the form just opens the visitor's email app.)

## Add or edit certificates
Put the file in `public/certificates/`, a small preview image in
`public/certificates/previews/`, then add an entry to `certificates` in `src/data.js`.

## Deploy on Vercel
1. Upload the project to GitHub (do NOT upload node_modules; .gitignore already skips it).
2. On https://vercel.com choose "Add New > Project" and import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click Deploy.
=======
# sahil-portfolio
>>>>>>> 01a4467dc594d461cf5d5935a7b082c7aa477c17
