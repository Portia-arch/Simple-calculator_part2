class Calculator {
    constructor() {
        this.lastNum = 0;
        this.slot = [];
    }

    //add numbers
    add(...args) {
        let sum = 0;

        args.forEach(num => {
            if (isNaN(num)) {
                num = this.string_slot(num)
            }
            sum += num;
        });

        this.lastNum = sum;
        this.slot.push(sum);

        return sum;
    }

    //check for any keywords
    string_slot(string) {
        if (string == "Last") {
            return this.last();
        }

        //return the last value of the string
        if (string.includes('slot_')) {
            let slot_num = string[string.length - 1];
            return this.slot[slot_num - 1];
        }

        return 0;
    }

    multiply(...args) {
        let quantity = 1;

        args.forEach(num => {
            if (num == "Last") {
                num = this.last()
            }
            quantity *= num;
        }); {

        }

        this.lastNum = quantity;
        this.slot.push(quantity)
        return quantity;
    }
    //return last
    last() {
        return this.lastNum;
    }

    set_slot(num) {
        this.lastNum = this.slot[num - 1];
    }

    get_slot(num) {
        return this.slot[num - 1];
    }
}

module.exports = { Calculator }