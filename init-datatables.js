```javascript
// Inicialização padrão de Datatables
 <script>
            $(document).ready(function() {
                $.fn.dataTable.moment('DD/MM/YYYY HH:mm');
                $.fn.dataTable.Buttons.defaults.dom.button.className = 'btn';

                $('#vinculo_promotoria_resultado').dataTable({
                    'columnDefs': [{
                        'target': 3, //index of column
                        'type': 'datetime-moment'
                      }],
                    'dom': 'lBfrtlip',
                    'paging': true,
                    lengthChange: true,
                    responsive: true,

                        'buttons': [
                            {
                                extend: 'excelHtml5',
                                className: 'btn-light btn-sm',
                                text: '<span style="font - size: 1.2em; color: Green;"><i class="fas fa-file-excel fa-2x"></i></span> &nbsp; Gerar <u>E</u>xcel',
                                key: {
                                    key: 'e',
                                    altKey: true
                                },
                               
                            },
                            {
                                    extend: 'pdfHtml5',
                                    
                                    pageSize: 'A4',
                                    className: 'btn-light btn-sm',
                                    text: '<span style="font - size: 1.2em; color: Tomato;"><i class="fas fa-file-pdf fa-2x"></i></span>&nbsp; Gerar P<u>D</u>F',
                                    key: {
                                        key: 'd',
                                        altKey: true
                                    }
                            },
                             {
                                extend: 'csvHtml5',
                                className: 'btn-light btn-sm',
                                text: '<span style="font - size: 1.2em; color: Dodgerblue;"><i class="fas fa-file-csv fa-2x"></i></span> &nbsp; Gerar <u>C</u>SV',
                                key: {
                                    key: 'c',
                                    altKey: true
                                }
                            },
                             {
                                extend: 'copyHtml5',
                                className: 'btn-light btn-sm',
                                text: '<span style="font - size: 1.2em; color: black;"><i class="fas fa-copy fa-2x"></i></span> &nbsp; C<u>o</u>piar',
                                key: {
                                    key: 'o',
                                    altKey: true
                                }
                            }, 
                        ],

                    'lengthMenu': [ [10, 25, 50, -1], [10, 25, 50, "Tudo"] ],
                    'language': {
                        'url': 'modulos/mpe_to/js/datatables-i18n-portuguese-brasil.json'
                    }
                });
            });
            </script>
```
