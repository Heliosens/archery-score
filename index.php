<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Archery score</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="img/minTarget.png" />
    <script src="https://kit.fontawesome.com/b3c591f1b4.js" crossorigin="anonymous"></script>
</head>
<body>
    <main>
        <section class="target">
            <div class="chocolate">0</div>
            <div class="white">1</div>
            <div class="white">2</div>
            <div class="black" id="three">3</div>
            <div class="black">4</div>
            <div class="blue">5</div>
            <div class="blue">6</div>
            <div class="red">7</div>
            <div class="red">8</div>
            <div class="yellow">9</div>
            <div id="ten" class="yellow">
                <span>10</span>
                <span>10</span>
            </div>
            <div id="plus">+</div>
        </section>

        <section id="switch">
            <div id="home">
                <div>
                    <span>Bienvenue sur</span>
                    <h1 id="big">Archery score</h1>
                </div>
                <div>
                    <div>
                        <label for="nbrOfVolley">nombre de volées</label>
                    </div>
                    <select name="nbrOfVolley" id="nbrOfVolley">
                        <option value="3" selected>3</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <a href="#" id="letsGo">
                    <?php
                        include "blason.php";
                    ?>
                </a>
            </div>
        </section>
        <section id="volleyScore">
            <div>

            </div>
        </section>
    </main>
    <script src="countScore.js"></script>
    <script src="app.js"></script>
</body>
</html>
