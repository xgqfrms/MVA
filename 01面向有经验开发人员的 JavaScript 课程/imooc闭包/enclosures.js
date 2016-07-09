//
function test() {

    document.body.innerHTML =
        "<div id='div1'><button>111</button></div>" + "<div id='div2'><button>222</button></div>" +
        "<div id='div3'>333</div>" + "<div id='div4'>444</div>";

    for (var i = 0; i < 4; i++) {
        document.getElementById('div' + i).addEventListener('click', function () {
            alert(i);//4
        });
    }

};
// test();

function newTest() {
    document.body.innerHTML =
        "<div id='div1'><button>111</button></div>" + "<div id='div2'><button>222</button></div>" +
        "<div id='div3'><button>333</button></div>" + "<div id='div4'><button>444</button></div>";

    for (var i = 0; i < 4; i++) {
        !function (i) {
            document.getElementById('div' + i).addEventListener('click', function () {
                alert(i);//1,2,3
            });
        } (i);
    }
}

newTest();