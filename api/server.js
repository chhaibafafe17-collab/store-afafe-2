/**
 * H&A Lingerie — API Vercel (Node.js)
 * Remplace api/index.php pour le déploiement sur Vercel.
 * Les données sont gardées en mémoire (reset au redémarrage).
 * Pour la persistance permanente → utiliser Hostinger avec PHP.
 */

/* Données initiales chargées depuis data.json au démarrage */
const defaultData = require('./data.json');

/* Stockage en mémoire (persiste pendant la session Vercel) */
let store = JSON.parse(JSON.stringify(defaultData));

module.exports = function handler(req, res) {
  /* CORS */
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Key');
  res.setHeader('Cache-Control', 'no-store');

  /* Preflight */
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  /* GET — retourner les données publiques (sans _auth) */
  if (req.method === 'GET') {
    const publicData = { ...store };
    delete publicData._auth;
    return res.status(200).json(publicData);
  }

  /* POST — sauvegarder les données (auth requise) */
  if (req.method === 'POST') {
    const provided = req.headers['x-auth-key'] || '';
    const valid    = store._auth || 'ha2026';

    if (provided !== valid) {
      return res.status(401).json({ error: 'Non autorisé — vérifiez votre mot de passe admin' });
    }

    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (!body || typeof body !== 'object') throw new Error('JSON invalide');
      /* Préserver _auth */
      store = { ...body, _auth: body._auth || valid };
      return res.status(200).json({ ok: true, at: new Date().toISOString() });
    } catch(e) {
      return res.status(400).json({ error: 'Données JSON invalides' });
    }
  }

  return res.status(405).json({ error: 'Méthode non supportée' });
};
