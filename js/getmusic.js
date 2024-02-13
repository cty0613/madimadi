const ans_data = [
    {
        "questionNum": 1,
        "selectedAns": '',
        "selectedStr": ''
    },
    {
        "questionNum": 2,
        "selectedAns": '',
        "selectedStr": ''
    },
    {
        "questionNum": 3,
        "selectedAns": '',
        "selectedStr": ''
    },
    {
        "questionNum": 4,
        "selectedAns": '',
        "selectedStr": ''
    },
    {
        "questionNum": 5,
        "selectedAns": '',
        "selectedStr": ''
    },
    {
        "questionNum": 6,
        "selectedAns": '',
        "selectedStr": ''
    },
    {
        "questionNum": 7,
        "selectedAns": '',
        "selectedStr": ''
    },
    {
        "questionNum": 8,
        "selectedAns": '',
        "selectedStr": ''
    }
]



$('.answer button').click((e)=>{
    var questionNum = $(e.currentTarget).attr('id').split('-')[0]
    var selectedNum = ($(e.currentTarget).attr('id').split('-')[2]);
    var selectedText = $(e.currentTarget).html();
    ans_data[questionNum-1].selectedAns = selectedNum;
    ans_data[questionNum-1].selectedStr = selectedText;

})

$('#view-result').click((e)=>{
    $(e.currentTarget).after("<p>" + JSON.stringify(ans_data) + " </p>")

})  