<div class="container">
  <h1 class="title">
                Nos réalisations<br />
              </h1>
              <div class="row">
  <?php
  class Achievement {
      public $_id;
      public $_title;
      public $_description;
      public $_img;

      public function getId()
      {
        return $this->_id;
        }
      public function getTitle()
      {
        return $this->_title;
        }
      public function getDescription()
      {
        return $this->_description;
        }
      public function getImg()
      {
        return $this->_img;
        }
  }

  $actandcare = new Achievement();
  $actandcare->_id = 'actandcare';
  $actandcare->_title = 'Site Web d\'Act&Care';
  $actandcare->_description = 'Act&Care, entreprise de mise en relation médicale à Paris avait besoin d\'un site web pour basculer son activité en ligne: mettre en relation des médecins et des centres hospitaliers';
  $actandcare->_img = 'assets/img/actandcare.png';

  $ellipsis = new Achievement();
  $ellipsis->_id = 'ellipsis';
  $ellipsis->_title = 'Site Web d\'Ellipsis Architecture';
  $ellipsis->_description = 'Ellipsis Architecture, cabinet d\'Architectes A Villeneuve d\'Ascq avait besoin de refondre son site web pour mieux présenter ses travaux.';
  $ellipsis->_img = 'assets/img/logoEllipsis.png';

echo '<div class="col-lg-4 col-lg-offset-1  col-sm-10 col-sm-offset-1 col-xs-12">';
writeAchievement($actandcare);
echo '</div>';
echo '<div class="col-lg-4 col-lg-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">';
writeAchievement($ellipsis);
echo '</div>';

function writeAchievement(Achievement $myNewAchievement){


  echo '<div class="achievements-box" id=\"',$myNewAchievement->getId(),'\">';
  echo '<div class="" id="elliTxt">';
  echo '<img class="logoCLient" id="elliLogo" src="',$myNewAchievement->getImg(),'"/>';
  echo '<h2 class="nomClient" style="text-align:center;">',$myNewAchievement->getTitle(),'</h2>';
  echo '<p class="description-client">',$myNewAchievement->getDescription(),'</p>';
  echo '</div>';
  echo '</div>';



}
   ?>
</div>
</div>
