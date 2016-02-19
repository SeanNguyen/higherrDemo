'use strict';

(function() {

angular.module('app')
  .controller('UniversityLifeController', ['$stateParams', '$timeout', UniversityLifeController]);

function UniversityLifeController($stateParams, $timeout) {
  this.init = function() {
  }
  this.currentPage = 0;
  this.totalItems = 11;
  this.pages = [
          [
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
          ],
          [
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
          ],
          [
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
          ],
          [
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
            { 
              date: '02/11/2010', 
              title: '"Treat you well"', 
              student: { status: 'Former Student', time: '2016' },
              pros: 'Would really rate it a 4.5 if I could. ULINE takes care of their employees. Bonus program is great, pay and benefits for a call center type job is unheard of. Especially fresh out of college. Lots of opportunity for overtime. Even more if you want to work weekends, nights or holidays. Unless your shift is originally set for weekend or night you will not be required to work any of those.',
              cons: "Job can get boring at times. As said in other reviews they do manage every statistic possible. What they don't mention is that its used a teaching tool. You don't get yelled at or fired if a metric is off. They give you lots of opportunity to try and fix your mistakes.",
              advices: 'Keep it up.'
            },
          ],
        ];
}
})();