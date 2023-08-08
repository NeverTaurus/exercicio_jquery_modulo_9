
    $('form').on('submit',function(e){
        e.preventDefault();
        
        const novaTarefa = $('#tarefa').val();
        const novoItem = $(`<li></li>`);
        
        $(`<div class="overlay">
        <a href="#">${novaTarefa}</a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#tarefa').val('')
    })
    
    $('ul').on('click','li',function(){
        $(this).css('text-decoration', 'line-through');
        
    })

    


    




