<script>
    import './main.sass' 
    let isOwner = false;
    let isCurrentRent = false;
    let isNull = false;
    let isPlayer = true;
    let elementsList = [
        {
            name: "Cizme",
            img: "",
            descr: "Rahat rahat rahat",
            price: 5000,
            count: 2,
            status: 55
        },
        {
            name: "Cizme3",
            img: "",
            descr: "Rahat rahat rahat",
            price: 5000,
            count: 2,
        },
        {
            name: "Cizme 2",
            img: "",
            descr: "Rahat rahat rahat",
            price: 5000,
        },
        {
            name: "Cizme",
            img: "",
            descr: "Rahat rahat rahat",
            price: 5000,
            count: 2,
            status: 55
        },
        {
            name: "Cizme3",
            img: "",
            descr: "Rahat rahat rahat",
            price: 5000,
            count: 2,
        },
        {
            name: "Cizme 2",
            img: "",
            descr: "Rahat rahat rahat",
            price: 5000,
        },
        {
            name: "Cizme",
            img: "",
            descr: "Rahat rahat rahat",
            price: 5000,
            count: 2,
            status: 55
        },
        {
            name: "Cizme3",
            img: "",
            descr: "Rahat rahat rahat",
            price: 5000,
            count: 2,
        },
        {
            name: "Cizme 2",
            img: "",
            descr: "Rahat rahat rahat",
            price: 5000,
        },
    ]
</script>
<div id="retail">
    <div class="retail__content">
        {#if isOwner == false && isCurrentRent == false && isPlayer == false}
            <div class="retail__content_left center">
                <div class="retail__image_lavka"></div>
                <div class="retail__title">Inchiriere cort</div>
                <div class="retail__content_flex">
                    <div class="gray">10 minute</div>
                    <div class="green">500$</div>
                </div>
                <div class="retail__grid">
                    <div class="retail__grid_element active">5 minute</div>
                    <div class="retail__grid_element">10 minute</div>
                    <div class="retail__grid_element">15 minute</div>
                    <div class="retail__grid_element">30 minute</div>
                    <div class="retail__grid_element">1 ora</div>
                    <div class="retail__grid_element">2 ore</div>
                    <div class="retail__grid_element">3 ore</div>
                    <div class="retail__grid_element">4 ore</div>
                </div>
            </div>
            <div class="retail__content_right"></div>
        {/if}     
        {#if isOwner == true && isPlayer == false}
            <div class="retail__content_left">
                <div class="retail__content__header">
                    <div class="retail__image_lavka"></div>
                    <div class="box-column">
                        <div class="retail__title">Inchiriere cort</div>
                        <div class="retail__progress">
                            <div class="retail__progress_current" style="width: 30%"></div>
                        </div>
                        <div class="retail__time">25:00</div>
                        <div class="retail__subtitle">Până la încheierea contractului de închiriere</div>
                    </div>
                </div>
                <div class="box-between">
                    <div class="retail__button">Extinde</div>
                    <div class="retail__button gray">Nume</div>
                    <div class="retail__button red">Complet</div>
                </div>
                {#if isNull}
                    <div class="retail__title m-t72" style="text-align:center">Pare gol aici... Puteți pune articole la vânzare din meniul din dreapta</div>
                {/if}
                {#if isNull == false}
                    <div class="retail__sell_items m-t72">
                        {#each new Array(20) as item}
                            <div class="retail__content_element">
                                <div class="retail__element_title">Cizme de mers</div>
                                <div class="box-flex">
                                    <div class="retail__item_box">
                                        <div class="retail__item_img"></div>
                                    </div>
                                    <div class="box-column">
                                        <div class="retail__info">
                                            <div class="retail__info_count green">5000000$</div>
                                            <div>Preț</div>
                                        </div>
                                        <div class="retail__info">
                                            <div class="retail__info_count">5 bucăți.</div>
                                            <div>Cantitate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                {/if}
            </div>
            <div class="retail__content_right">
                <div class="retail__element_title">Inventar</div>
                <div class="retail__inventory">
                    {#each new Array(40) as item}
                        <div class="retail__item_box n-m">
                            <div class="retail__item_img"></div>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}     
        {#if isPlayer == true && isOwner == false}
            <div class="box-column">
                <div class="retail__content__header">
                    <div class="retail__image_lavka"></div>
                    <div class="box-column">
                        <div class="retail__title">Un cort #228</div>
                    </div>
                </div>
                <div class="retail__player_list">
                    {#each elementsList as item}
                        <div class="retail__player_element">
                            <div class="box-flex">
                                <div class="retail__item_box">
                                    <div class="retail__item_img"></div>
                                </div>
                                <div class="box-column">
                                    <div class="retail__buyelement_title">{item.name} 
                                        {#if item.status}
                                            <span class="orange">{item.status}%</span>
                                        {/if}
                                        {#if item.count}
                                            <span class="gray">{item.count} шт.</span>
                                        {/if}
                                    </div>
                                    <div class="retail__element_subtitle">{item.descr}</div>
                                </div>
                            </div>
                            <div class="box-flex">
                                <div class="price">{item.price}$</div>
                                <div class="retail__element_button">Cumpără</div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
    <div class="box-between">
        <div class="house_bottom_buttons box-flex back" style="opacity:0">
            <div>Alege</div>
            <div class="house_bottom_button">Enter</div>
        </div>
        <div class="house_bottom_buttons box-flex back">
            <div>Chirie</div>
            <div class="house_bottom_button">Enter</div>
        </div>
        <div class="house_bottom_buttons box-flex">
            <div>Ieși</div>
            <div class="house_bottom_button">ESC</div>
        </div>
    </div>
</div>