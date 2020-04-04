// let dummyData = [
//     { rate:"90", unit:"%", field: "HTML", color: ''},
//     { rate:"85", unit:"%", field: "CSS", color: ''},
//     { rate:"65", unit:"%", field: "HTML", color: ''},
// ]

// App.Circle = function () {
//     let circle = {};

//     circle.initialize = function() {
//         circle.createCircle();
//     };

//     circle.setEvents = function() {

//     };

//     circle.createCircle = function () {
//         console.log(dummyData);
//         let container = document.querySelector('.container');
//         for(let i = 0; i < dummyData.length; i++){
//             let card = document.createElement('div');
//             card.setAttribute('class', 'card');

//             let box = document.createElement('div');
//             box.setAttribute('class', 'box');

//             let percent = document.createElement('div');
//             percent.setAttribute('class', 'percent');

//             let svg = document.createElement('svg');            
//             let circle = document.createElement('circle');
//             circle.setAttribute('cx', '70');
//             circle.setAttribute('cy', '70');
//             circle.setAttribute('r', '70');

//             circle = document.createElement('circle');
//             circle.setAttribute('cx', '70');
//             circle.setAttribute('cy', '70');
//             circle.setAttribute('r', '70');

//             let number = document.createElement('div');
//             number.setAttribute('class', 'number');

//             let h2 = document.createElement('h2');
//             let span = document.createElement('span');

//             svg.appendChild(circle);
//             h2.appendChild(span);
//             number.appendChild(h2);
//             percent.appendChild(number);
//             percent.appendChild(svg);
//             box.appendChild(percent);
//             card.appendChild(box);
//             container.appendChild(card);
//             console.log(container);
//         }
//     };

//     return circle;
// }();

//get Battery Percentage
navigator.getBattery().then(function (battery) {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener('chargingchange', function () {
        updateChargeInfo();
    });
    function updateChargeInfo() {
        console.log("Battery charging? "
            + (battery.charging ? "Yes" : "No"));
        return battery.charging ? "Charging : Yes" : "Charging : No";
    }

    battery.addEventListener('levelchange', function () {
        updateLevelInfo();
    });
    function updateLevelInfo() {
        console.log("Battery level: "
            + battery.level * 100 + "%");
        return battery.level * 100;
    }

    battery.addEventListener('chargingtimechange', function () {
        updateChargingInfo();
    });
    function updateChargingInfo() {
        console.log("Battery charging time: "
            + battery.chargingTime + " seconds");
            return battery.chargingTime + " seconds";
    }

    battery.addEventListener('dischargingtimechange', function () {
        updateDischargingInfo();
    });
    function updateDischargingInfo() {
        console.log("Battery discharging time: "
            + battery.dischargingTime + " seconds");
            
            return battery.dischargingTime + " seconds"
    }

    function updateChartBatteryPercentage(){
        let batteryRate = updateLevelInfo();
        let s = document.querySelector(".card:nth-child(1) svg circle:nth-child(2)");
        let setRate = document.querySelector(".number h2");                
        setRate.innerHTML = Math.round(batteryRate) + "%";
        s.style.class = 'asd';         
        s.style.strokeDashoffset = 'calc(440 - (440 *' + Math.round(batteryRate) + ') / 100)';
    
        if(batteryRate <= 50){
            s.style.stroke = '#f4ff00';
        }
        else if(batteryRate < 30){
            s.style.stroke = 'ff4200';
        }        
        else if(batteryRate < 20){
            s.style.stroke = '#ff0000';
        }

        let d = document.querySelector(".charging-info");
        d.innerHTML = updateChargeInfo();
        console.log(s,batteryRate, setRate);
    };    

    updateChartBatteryPercentage(); 

    setInterval(function() {        
        updateChartBatteryPercentage();
    }, 5 * 1000); //every 5 sec
});

//run every minute


//updateChartBatteryPercentage();