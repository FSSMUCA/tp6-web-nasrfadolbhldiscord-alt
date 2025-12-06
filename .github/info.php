<?php

$etablissement = "FSSM – Faculté des Sciences Semlalia";
$module = "Développement Web";
$annee = "2024 / 2025";
$etudiant = "Nasrallah";

$a = 10;
$b = 5;

$addition = $a + $b;
$multiplication = $a * $b;
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>TP6 – Informations PHP</title>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #f5f5f7;
      margin: 0;
      padding: 0;
    }
    header, footer {
      text-align: center;
      padding: 1rem;
      background: #111;
      color: #fff;
    }
    main {
      max-width: 800px;
      margin: 2rem auto;
      background: #fff;
      border-radius: 10px;
      padding: 1.5rem 2rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    }
    h1, h2 {
      margin-top: 0;
    }
    .info-block {
      margin-bottom: 1rem;
    }
  </style>
</head>
<body>

<header>
  <h1>TP 6 – Page d'informations PHP</h1>
</header>

<main>
  <section class="info-block">
    <h2>Informations générales</h2>
    <p><strong>Établissement :</strong> <?php echo $etablissement; ?></p>
    <p><strong>Module :</strong> <?php echo $module; ?></p>
    <p><strong>Année universitaire :</strong> <?php echo $annee; ?></p>
    <p><strong>Étudiant :</strong> <?php echo $etudiant; ?></p>
  </section>

  <section class="info-block">
    <h2>Variables numériques & opérations</h2>
    <p>Valeur de <strong>$a</strong> : <?php echo $a; ?></p>
    <p>Valeur de <strong>$b</strong> : <?php echo $b; ?></p>
    <p><strong>$a + $b</strong> = <?php echo $addition; ?></p>
    <p><strong>$a × $b</strong> = <?php echo $multiplication; ?></p>
  </section>

  <section class="info-block">
    <p>Cette page illustre la déclaration de variables PHP et l'affichage avec <code>echo</code>.</p>
    <p><a href="index.html">← Retour à la calculatrice</a></p>
  </section>
</main>

<footer>
  TP 6 – JavaScript & PHP
</footer>

</body>
</html>
