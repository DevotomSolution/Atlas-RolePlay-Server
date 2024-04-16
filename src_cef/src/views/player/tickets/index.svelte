<script>
    import './main.sass'
    import './fonts/style.css'
    import { format } from 'api/formatter'
    import moment from 'moment'
    import { executeClient } from 'api/rage'
    export let viewData;

    if (!viewData)
        viewData = []

    if (viewData && typeof viewData === "string")
        viewData = JSON.parse (viewData)

    let selectData = null;
    let hoverIndex = 0;
    
    const onKeyUp = (event) => {
        const { keyCode } = event;
        
        switch (keyCode) {
            case 38:
                if (--hoverIndex < 0)
                    hoverIndex = viewData.length - 1;
                break;
            case 40:                
                if (++hoverIndex >= viewData.length)
                    hoverIndex = 0;
                break;
            case 13:
                onSelect (hoverIndex);
                break;
            case 27:
                onExit ();
                break;
        }
    }

    const onSelect = (index) => {        
        if (selectData == null) {
            hoverIndex = index;
            selectData = viewData [index];
        } else {
            executeClient("client.ticket.payment", selectData.AutoId)
            executeClient("client.ticket.close");
        }
    }

    const onExit = () => {        
        if (selectData !== null)
            selectData = null;
        else 
            executeClient("client.ticket.close")
    }
</script>

<svelte:window on:keyup={onKeyUp} />

<div id="playerticket">
    {#if selectData == null}
        <div class="playerticket__title">Înregistrarea unei amenzi</div>
        <div class="playerticket__header">
            <div class="playerticket__carname">Model</div>
            <div class="playerticket__date">Data</div>
            <div class="playerticket__price">Penalizare</div>
            <div class="playerticket__text">Număr</div>
        </div>
        <div class="playerticket__list">
            {#each viewData as ticket, index}
            <div class="playerticket__element" class:active={hoverIndex === index} on:click={() => onSelect (index)}>
                <div class="playerticket__carname">
                    <span class="houseicon-car"></span>
                    {ticket.Model}
                </div>
                <div class="playerticket__date">{moment(ticket.Time).format('DD.MM.YYYY HH:mm')}</div>
                <div class="playerticket__price">${format("money", ticket.Price)}</div>
                <div class="playerticket__text">{ticket.VehNumber}</div>
            </div>
            {/each}
        </div>
        <div class="playerticket__buttons">
            <div class="playerticket_bottom_buttons center" on:click={() => onSelect (hoverIndex)}>
                <div class="playerticket_bottom_button">ENTER</div>
                <div>Alege</div>
            </div>
            <div class="playerticket_bottom_buttons esc" on:click={onExit}>
                <div>Ieși</div>
                <div class="playerticket_bottom_button">ESC</div>
            </div>
        </div>
    {:else}
        <div class="playerticket__title">Plata pedepsei</div>
        <div class="playerticket__photo" style="background-image: url({selectData.Link})"></div>
        <div class="playerticket__line"></div>
        <div class="playerticket__title">informație</div>
        <div class="box-between">
            <div class="gray">Proprietar:</div>
            <div class="playerticket__line"></div>
            <div class="playerticket__name">{selectData.HolderName}</div>
        </div>
        <div class="box-between">
            <div class="gray">Evacuat:</div>
            <div class="playerticket__line"></div>
            <div class="playerticket__name">{selectData.PolicName.replace(/_/g, " ")}</div>
        </div>
        <div class="box-between">
            <div class="gray">Modelul de mașină:</div>
            <div class="playerticket__line"></div>
            <div class="playerticket__name">{selectData.Model}</div>
        </div>
        <div class="box-between">
            <div class="gray">Încălcare:</div>
            <div class="playerticket__line"></div>
            <div class="playerticket__name">{selectData.Text}</div>
        </div>
        <div class="box-between">
            <div class="gray">Preț:</div>
            <div class="playerticket__line"></div>
            <div class="playerticket__name">${format("money", selectData.Price)}</div>
        </div>
        <div class="playerticket__buttons">
            <div class="playerticket_bottom_buttons center" on:click={onSelect}>
                <div class="playerticket_bottom_button">ENTER</div>
                <div>Plătească o amendă</div>
            </div>
            <div class="playerticket_bottom_buttons esc" on:click={onExit}>
                <div>Ieși</div>
                <div class="playerticket_bottom_button">ESC</div>
            </div>
        </div>
    {/if}
</div>