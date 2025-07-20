# HTTP vs HTTPS in Node.js 🔐

This project is a simple and practical experiment to understand the difference between HTTP and HTTPS using Node.js and Express. It also includes packet analysis using Wireshark to clearly see how data is transmitted in both protocols.

## 📌 Aim

To learn the basics of web and network security by exploring how HTTP and HTTPS work, and how encryption helps protect data from being exposed during transmission.

## 🎯 Objectives

- Understand what HTTPS is and how it works.
- Learn how encryption (TLS/SSL) protects web communication.
- Understand the role of APIs and how to expose them securely.
- Analyze the difference between HTTP and HTTPS traffic using Wireshark.

## 🛠️ Tools & Technologies

- Node.js
- Express.js
- OpenSSL (for generating self-signed certificates)
- Wireshark (for network traffic analysis)

## ✅ Tasks Completed

- Built a basic Node.js application with HTTP endpoints.
- Recreated the same app using HTTPS with a self-signed certificate.
- Captured and compared HTTP and HTTPS packets using Wireshark.

## 📂 Project Structure

```
http-vs-https-nodejs/
├── http-server.js         # HTTP server using Express
├── https-server.js        # HTTPS server using Express and self-signed certs
├── server.key             # Private key for HTTPS (generated)
├── server.cert            # Self-signed certificate
└── README.md              # Project documentation
````

## 🔐 Generating Self-Signed Certificates

For testing HTTPS locally, you can generate a certificate using OpenSSL:

```bash
openssl req -nodes -new -x509 -keyout server.key -out server.cert
````

Then use these files in your HTTPS server setup.

## 🧪 Wireshark Traffic Analysis

* HTTP: Data is transmitted in plain text and is readable when captured.
* HTTPS: All data is encrypted, so even if intercepted, it remains unreadable without the private key.

## 📈 Learning Outcome

* Clearly saw the risks of HTTP through visible data packets.
* Understood the importance of encryption using HTTPS.
* Gained experience in implementing and securing APIs.
* Practiced using Wireshark for traffic analysis.

## ⚠️ Note

This project uses **self-signed certificates**, which are suitable only for development/testing. For production environments, always use certificates from a trusted Certificate Authority (CA).

## 🧠 Author

Developed as part of a security experiment by a computer engineering student exploring backend development and web security.

---

```

Let me know if you want me to generate the actual `http-server.js` and `https-server.js` files to go along with this README.
```
