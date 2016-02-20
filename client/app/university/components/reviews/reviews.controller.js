'use strict';

function ReviewController($scope) {
  this.type = $scope.reviewsType || 'life';
  this.currentPage = 0;
  this.totalItems = 11;
  this.pages = [
          [
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
          ],
          [
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
          ],
          [
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
          ],
          [
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              data1: 'Nationales un compassion au boulevards renferment decharnees primeveres de. As prisonnier patiemment du la instrument au. La emmener il epaules ah horreur cartons laideur dernier.',
              data2: "Palais voulut croyez pendus choses tempes tot des. Parterre se bravoure ah kolbacks mourants arrivons retablir. Somme avons on je roidi temps heure large. Accable fit doubles violent premier comment chasses ans. Six ameliorer son vit jeu viendrait massacrer.",
              data3: 'Quoi je il coup pied la voix un. Et et gare me jeta pour puis boue. Diable moment et police le grande genoux tu.'
            },
          ],
        ];
}

angular.module('app')
  .controller('ReviewController', ['$scope', ReviewController]);
