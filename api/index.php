<?php
/**
 * H&A Lingerie — Data API
 * Hostinger PHP compatible — remplace Firebase
 *
 * GET  /api/index.php  → Retourne toutes les données du site (public)
 * POST /api/index.php  → Sauvegarde les données (requiert X-Auth-Key)
 */

define('DATA_FILE',    __DIR__ . '/data.json');
define('DEFAULT_AUTH', 'ha2026');

/* ---- Headers ---- */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Key');

/* CORS preflight */
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

/* ---- Load current data from file ---- */
function loadData(): array {
    if (!file_exists(DATA_FILE)) {
        return [
            '_auth'    => DEFAULT_AUTH,
            'config'   => new stdClass(),
            'announce' => [],
            'products' => []
        ];
    }
    $raw  = file_get_contents(DATA_FILE);
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [
        '_auth'    => DEFAULT_AUTH,
        'config'   => new stdClass(),
        'announce' => [],
        'products' => []
    ];
}

/* ================================================================
   GET — Retourne les données publiques (sans _auth)
   ================================================================ */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = loadData();
    unset($data['_auth']); /* Ne jamais exposer le mot de passe */
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

/* ================================================================
   POST — Sauvegarde les données (authentification requise)
   ================================================================ */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    /* Vérification du mot de passe */
    $current   = loadData();
    $validAuth = $current['_auth'] ?? DEFAULT_AUTH;
    $provided  = trim($_SERVER['HTTP_X_AUTH_KEY'] ?? '');

    if ($provided !== $validAuth) {
        http_response_code(401);
        echo json_encode([
            'error' => 'Non autorisé — vérifiez votre mot de passe admin'
        ]);
        exit;
    }

    /* Décodage du body JSON */
    $raw = file_get_contents('php://input');
    $new = json_decode($raw, true);

    if ($new === null) {
        http_response_code(400);
        echo json_encode(['error' => 'Données JSON invalides']);
        exit;
    }

    /* Préserver le _auth si non fourni dans les nouvelles données */
    if (empty($new['_auth'])) {
        $new['_auth'] = $validAuth;
    }

    /* Écriture dans data.json */
    $written = file_put_contents(
        DATA_FILE,
        json_encode(
            $new,
            JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
        )
    );

    if ($written === false) {
        http_response_code(500);
        echo json_encode([
            'error' => 'Impossible d\'écrire le fichier. Vérifiez les permissions (chmod 664).'
        ]);
        exit;
    }

    echo json_encode([
        'ok'   => true,
        'size' => $written,
        'at'   => date('d/m/Y H:i:s')
    ]);
    exit;
}

/* Méthode non supportée */
http_response_code(405);
echo json_encode(['error' => 'Méthode non supportée']);
