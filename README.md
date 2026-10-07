Nextjs Warmup

1. What does Next.js provide beyond React alone?
- Next.js annab Reactile marsuutimise, serveripoolse renderdamise ja backend API routeid.

2. Why does the counter need 'use client'?
- Ilma selleta arvaks Next.js, et useState ja onClick komponendid on Server komponendid ning siis ei saaks nupuvajutust kuulata. Use client muudab need Client komponendiks.

3. Where does the code in app/api/message/route.js run?
- See jookseb serveris.

4. How is this endpoint similar to an Express route?
- Mõlemad võtavad vastu päringu kindlal aadressil ja saadavad vastuse tagasi.

5. Why must secrets remain on the server?
- Kuna kõik, mis on browseris, on ka kasutajatele nähtav.
