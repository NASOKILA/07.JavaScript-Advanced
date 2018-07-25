
function createComputerHierarchy() {

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer)
                throw new Error('Cannot instantiate an abstract class.');

            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {

            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }
        set battery(newBattery) {

            let className = newBattery.constructor.name;
            if (className !== 'Battery')
                throw new TypeError('The type is not a Battery.');

            this._battery = newBattery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }
        set keyboard(newKeyboard) {

            let className = newKeyboard.constructor.name;
            if (className !== 'Keyboard')
                throw new TypeError('The type is not a Keyboard.');

            this._keyboard = newKeyboard;
        }

        get monitor() {
            return this._monitor;
        }
        set monitor(newMonitor) {

            let className = newMonitor.constructor.name;
            if (className !== 'Monitor')
                throw new TypeError('The type is not a Monitor.');

            this._monitor = newMonitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}