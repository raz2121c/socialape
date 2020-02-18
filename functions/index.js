const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = {
    "type": "service_account",
    "project_id": "rising-pen-268601",
    "private_key_id": "a9a14f86fa4e80c6f7c3ee1469b14c3063274e31",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCtXkA9nQlSSTws\nwBFPSOa6E6xHRm66pj0K61xEvgYQhA/7dPlgSHtW/XSLpNoeUPanb0YFO+9Rj3on\njpWv4guTu0sIbYESGNE8JS1AJE/iYc7zfI4Z+p+a6kw1fNdAgRdXUxywBeKlh6Iw\nQeobY7Z4wF9TB9RlDzWJiQwD4IG5NvMrO9j3QgBC8fHMOqtz8hVqTroswwzfKDjM\nDJkpsK5Rt3+2f7fsTHUUCPkdisyUndLzm/hgeSR3P6fs0vRuL9xYM3usCwbnLL69\nk6PyKqYTCiJZ3NLcglirJk8I09M3oljnmZFIQ4+6MFmihmjQz0JjkXqaUzwSfKWp\n+Dhh2RhTAgMBAAECggEAB4zBM22xSDoUOsaqek9sbNIKgJganlo68kzJmdzEmteF\ncqfnbD/7zw/+kU4+iW9xLl10KSoxA9ZBtZNKBXzMkERpwhYytr0J75qW2+I48Fze\nDFByR8NYTADEDNhA73gvsgfWifvXoOnFMGDOdx7ihWOrQwxmPXhqFnE3arvOKmid\nwWlVw3pnRzHqHK85Scq5BJewYl7p0rxj1D2GApJAAaFfx73o10a+OlxchZwDVFBt\nRn2tsPJcawi8HbVB3iFxjpwVE8tuxkoHXh/1qqG1LhdQ5R9yovOpskvSKtop8pH4\nQknAlg4LxFJUDJGq+u6s6wJT0hDFjflIHEhwwuFioQKBgQDo4moMXYLe6mf86TTc\nZhZpyhSxcsiVAzGBJMHsbXMPv9ocAJnPkQY6jtci7gDfGQLZUx3hHdJrsMibW3XC\nbA3S1jg6yK6MtRvMk/Ee20KHXg9RMfhFUJpCH2cuVIj6QsvJD57ep0Jsp1HvsVz1\nVhCaNkJpIuYoKWoLZXPkU2v2WQKBgQC+k4fIONtoPmtXgGnqOz6gBsdPwzDO5f2p\nyInM1sSnXvi19C1BaSAPuYacx/qBRuJpfRDSUNGnm3xT7aFnhg1BS6gKirF16jw2\nI/RYAfkt+UkgDSG/ve58/EWiWSD55lB6SvjTS+nU0tC/E0XWGBtrNc7nc8j2mhAV\nX4512A5GiwKBgQDhEC881AJuPEtS+G3FskNm6Y0mELAYkoV9MXDYdM4GIns/JLWB\nC77hSLpRX4IoGZvPO6xcqt14hdjZi4I66wJRCAY/iUJnaX/8Ld2Q3IVnHVfgOFKf\nak4qKP8mnzvh4Dvhi98Vfr+LEgj1hIs57nsNDfMQeFHF7oA1k051Esn7wQKBgDoa\nZsJ/uz0sErQJ3cDhMTW++1NxMldSPaVfE8xVCn3w8akf+hBASdsheE4illiF0Q/S\nZqeIpnMQb7Zy88vJTg9DTsdwA6zsrlDfY2bVqy/+GfJgrpJ0CNsoWt6lh+1I7+5p\nHzXkpjUR1Tz8VkVw8iMcs6lTXsj4rcCmcpuxNKEDAoGAXeRe8gic9A+PSTX0F9wn\nAzxEEJ+M8HdfMnTcFE8+amDvtNVkbfykuTR3QjH1e57M4xV+EOCpcAMMjcTTk5MP\nSF538eGc5CWox/DoZcvelFMmcJDS/9/ZywpIF3RGHHG6IUioMqh3ygqm6qRhfGzr\nlWWFwLnTlyYiXHwp0PuKKTM=\n-----END PRIVATE KEY-----\n",
    "client_email": "admin-302@rising-pen-268601.iam.gserviceaccount.com",
    "client_id": "109691657878860499989",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/admin-302%40rising-pen-268601.iam.gserviceaccount.com"
};


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://socialape-1cf48.firebaseio.com"
});

const app = require('express')();

const firebaseConfig = {
    apiKey: "AIzaSyBlrnb1veocPR6V56chZjpw_hqkAtP8GS4",
    authDomain: "socialape-1cf48.firebaseapp.com",
    databaseURL: "https://socialape-1cf48.firebaseio.com",
    projectId: "socialape-1cf48",
    storageBucket: "socialape-1cf48.appspot.com",
    messagingSenderId: "671746659085",
    appId: "1:671746659085:web:532e2b5c9abc9bfb345644",
    measurementId: "G-BB4RP4G5V0"
};

const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

const db = admin.firestore();

app.get('/screams', (req, res) => {
    db.collection('screams')
    .orderBy('createdAt', 'desc')
    .get().then(data => {
        let screams = [];
        data.forEach(doc => {
            screams.push({
                screamId: doc.id,
                ...doc.data()
            });
        });
        return res.json(screams);
    })
    .catch(err => console.error(err));
});

app.post('/scream', (req, res) => {
    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: new Date().toISOString()
    };

    db.collection('screams').add(newScream).then((doc) => {
        res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch((err) => {
        res.status(500).json({ error: 'something went wrong' });
        console.error(err);
    });
});

const isEmpty = string => string.trim() === '';
const isEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).trim().toLowerCase());
};

// Signup route
app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle
    };

    let errors = {};

    if (isEmpty(newUser.email)) {
        errors.email = 'Must not be empty';
    } else if (!isEmail(newUser.email)) {
        errors.email = 'Must be a valid email.';
    }

    if (isEmpty(newUser.password)) errors.password = 'Must not be empty.';
    if (newUser.password !== newUser.confirmPassword) errors.confirmPasswors = 'Passwords must match.';
    if (isEmpty(newUser.handle)) errors.handle = 'Must not be empty.';

    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    let token, uid;
    db.doc(`/users/${newUser.handle}`).get()
    .then(doc => {
        if(doc.exists){
            return res.status(400).json({ handle: 'this handle is already taken' });
        } else {
            return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
        }
    }).then(data => {
        uid = data.user.uid;
        return data.user.getIdToken()
    }).then(tk => {
        token = tk;
        const userCredentials = {
            handle: newUser.handle,
            email: newUser.email,
            createdAt: new Date().toISOString(),
            userId: uid
        };
        return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    }).then(data => {
        return res.json(201).json({ token });
    }).catch(err => {
        console.error(err);
        if (err.code === 'auth/email-already-in-use') {
            return res.status(400).json({ email: "Email is already in use." });
        } else {
            return res.status(500).json({ error: err.code });
        }
    });
});

app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    let errors = {};
    if (isEmpty(user.email)) {
        errors.email = 'Must not be empty';
    } else if (!isEmail(user.email)) {
        errors.email = 'Must be a valid email.';
    }
    if (isEmpty(user.password)) errors.password = 'Must not be empty.';

    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(data => data.user.getIdToken()).then(t => res.json({ token: t }))
    .catch(err => {
        console.error(err);
        if (err.code === 'auth/wrong-password') {
            return res.status(403).json({ general: "Wrong password." });
        } else {
            return res.status(500).json({ error: err.code });
        }
    });
});

exports.api = functions.https.onRequest(app);