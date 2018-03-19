<!DOCTYPE html>
<html>
<?php include('include/header.php') ?>
<body style='background-color:rgb(0,0,0);'>
  <div id='carousselContainer'>
    <ul id="caroussel">



      <li class="active"><span class="lien">Accueil</span>

        <?php include('include/home.php') ?>
      
      </li>

      <li class="notMain" style="background: url(assets/css/sun.jpg) center center no-repeat;"><span class="lien">Nos réalisations</span>
        <?php include('include/achievements.php') ?>
      </li>

      <li class="notMain" style="background: url(assets/css/galaxy.jpg) center center no-repeat;"><span class="lien">Notre Equipe</span>
        <?php include('include/team.php') ?>
      </li>

      <li class="notMain" style="background: url(assets/img/tornado.jpg) center center no-repeat;"><span class="lien">Nous contacter</span>
        <?php include('include/contact.php') ?>
      </li>

    </ul>

    <div id="subnav"></div>
    <a href="#" class="nav" id="next"></a>
    <a href="#" class="nav" id="prev"></a>
    <script language="javascript" type="text/javascript" src="assets/js/carroussel.js"></script>
    <script language="javascript" type="text/javascript" src="assets/js/main.js"></script>
    <script language="javascript" type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>
  </div>
   <nav class="burger">
    <a href="#" class="burger__button" id="burger-button">
      <span class="burger__button__icon"></span>
    </a>
    <ul class="burger__menu">
      <li><a class='page' id='0' href="#">Accueil</a></li>
      <li><a class='page' id='1' href="#">Nos réalisations</a></li>
      <li><a class='page' id='2' href="#">Notre équipe</a></li>
      <li><a class='page' id='3' href="#">Nous contacter</a></li>
    </ul>
  </nav>
  <script language="javascript" type="text/javascript" src="assets/js/burgerMenu.js"></script>

</body>

</html>
