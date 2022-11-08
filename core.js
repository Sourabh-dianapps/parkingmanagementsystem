let fwSlot = new Array(300).fill(null);
let twSlot = new Array(100).fill(null);


var totalChargesCollected = 0;
class Entry {
    constructor() {
        //console.log(constructor.called);
    }
    allotment(vType, vNum) {
        if (vType == 4) {
            for (let i = 0; i < fwSlot.length; i++) {
                let slot = fwSlot[i];
                console.log("slot==>", slot);
                if (slot === null) {
                    fwSlot[i] = vNum;
                    return i + 1;
                }
            }
        }
        else {
            for (let i = 0; i < twSlot.length; i++) {
                let slot = twSlot[i]
                if (slot === null) {
                    twSlot[i] = vNum;
                    // console.log("dd->", i);
                    return i + 1;
                }
            }
        }
    }
    remove(vType, vNum) {
        if (vType === '4') {
            for (let i = 0; i < fwSlot.length; i++) {
                let slot = fwSlot[i]

                console.log("slot in remove==>", slot);
                console.log("vNum in remove==>", vNum);
                if (slot === vNum) {
                    fwSlot[i] = null;
                    console.log(fwSlot);
                    totalChargesCollected += 50;
                    return true;
                    //break;
                }
            }
        }
        else if (vType === '2') {
            for (let i = 0; i < twSlot.length; i++) {
                let slot = twSlot[i]
                // console.log(slot);
                if (slot === vNum) {
                    twSlot[i] = null;
                    totalChargesCollected += 25;
                    return true;

                }
            }
        }
        else {
            return false;
        }
    }

}

class UI {
    static displayEntries(Owner, vNum, vType, slot) {
        const list = document.querySelector('#tableBody');

        const row = document.createElement('tr');
        row.id = vNum;

        row.innerHTML = `
        <td>${Owner}</td>
        <td>${vNum}</td>
        <td>${vType}</td>
        <td>${slot}</td>
        `;

        list.appendChild(row);
    }
}
var uk = new Entry();

const slotBook = () => {
    const owner = document.querySelector('#onId').value;
    const vType = document.querySelector('#vtId').value;
    const vNum = document.querySelector('#vnId').value;

    const allot = uk.allotment(vType, vNum);
    console.log("slot->", allot);
    UI.displayEntries(owner, vNum, vType, allot);



}

const checkout = () => {

    const vType = document.querySelector('#checkOutVtId').value;
    const vNum = document.querySelector('#checkOutVnId').value;
    // const slot = document.querySelector('#vnId').value;
    var vr = new Entry();
    if (vr.remove(vType, vNum)) {

        document.getElementById(vNum).remove();
    }

    document.getElementById("totalChargeCollectedId").value = totalChargesCollected;

}
