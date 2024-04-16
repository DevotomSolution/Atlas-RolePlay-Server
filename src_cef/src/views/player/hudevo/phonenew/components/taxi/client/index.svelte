<script>
    import HomeButton from './../../homebutton.svelte'

    export let getPosition;
    export let setPosition;
    export let setOtherElement;
    export let closeMenu;


    import { executeClientAsync, executeClientToGroup, executeClientAsyncToGroup } from 'api/rage'


    let streetName = "";
    let areaName = "";
    const getStreetAndArea = (pos) => {

        executeClientAsync("getStreetName", pos).then((result) => {
            streetName = result;
        })

        executeClientAsync("getAreaName", pos).then((result) => {
            areaName = result;
        });
    }



    //

    const onOrder = () => {
        if (!window.loaderData.delay ("taxi.onOrder", 1.5))
            return;

        executeClientToGroup ("taxi.order");
    }

    const onCancelOrder = () => {
        if (!window.loaderData.delay ("taxi.onOrder", 1.5))
            return;

        executeClientToGroup ("taxi.cancel");
    }


    let selectTaxi = {}

    export let position;

    const getData = () => {
        executeClientAsyncToGroup("taxi.getOrder").then((result) => {
            if (result && typeof result === "string") {
                selectTaxi = JSON.parse(result);

                if (selectTaxi.pos) {
                    setPosition (selectTaxi.pos);

                    getStreetAndArea(selectTaxi.pos);
                } else
                    getStreetAndArea(position);

                setOtherElement (otherElement);
            }
        });
    }

    getData();
    import { addListernEvent } from 'api/functions'
    addListernEvent ("phone.taxi.load", getData);
    import { fade } from 'svelte/transition'

    let otherElement;
</script>

<div class="newphone__maps_categories" style="background: linear-gradient(90deg, #FF8A00 0%, #D14E04 94.41%)" in:fade>
    {#if selectTaxi && selectTaxi.driver}
        <div class="newphone__maps_price">
            <div class="box-column">
                <div class="newphone__maps_pricetitle">Conducător auto:</div>
                <div class="newphone__maps_pricesubtitle">{selectTaxi.driver}</div>
                <div class="newphone__maps_pricetitle">{selectTaxi.number}</div>
            </div>
            <div class="newphone__maps_car"></div>
        </div>
    {/if}

    <div class="newphone__maps_subcategories" bind:this={otherElement} use:setOtherElement>

        <div class="box-between newphone__project_padding20">
            <div class="newphone__maps_header">Suna un taxi</div>
            <div class="phoneicons-add1" on:click={closeMenu}></div>
        </div>

        <div class="box-flex newphone__project_padding20 mb-0">
            <div class="newmphone__maps_circle"><div class="newmphone__maps_circle2"></div></div>
            <div class="newphone__maps_column">
                <div class="newphone__column_title">Locația de sosire</div>
                <div class="newphone__column_subtitle">{streetName} - {areaName}</div>
            </div>
        </div>
        <div class="newphone__maps_list" style="height: auto; min-height: auto; max-height: auto;">
            {#if selectTaxi && selectTaxi.isOrder}
                <div class="newphone__maps_title">Comandă plasată</div>
                <div class="newphone__maps_subtitle">Așteptați șoferul fără a părăsi punctul de apel. Dacă pleci, atunci comanda va fi anulată și ți se va aplica o amendă.</div>
                <!--<div class="orange">Стоимость: 2500$</div>-->
                <div class="newphone__project_button" on:click={onCancelOrder}>Anulare</div>
            {:else}
                <div class="newphone__project_button" on:click={onOrder}>Ordin</div>
            {/if}
            <div class="orange box-center" on:click={closeMenu}>Închide</div>
        </div>
        <HomeButton />
    </div>
</div>