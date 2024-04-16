<script>
    import { executeClient } from 'api/rage'
    import { format } from 'api/formatter'
    import { charMoney } from 'store/chars.js'
    import './main.sass';
    import InputCustom from 'components/input/index.svelte'
    import { validate } from 'api/validation';
    export let viewData;

    const price = viewData.price;

    let weddingType = viewData.type; // 0 - se căsătoresc / 1 - divorț

    const weddingTypeText = [
        "Ai ajuns într-un loc în care îndrăgostiții își pot pecetlui sentimentele cu căsătoria. Lumea este doar pentru voi doi!",
        "Există diferite situații în viață.. Uneori ceea ce pare a fi dragoste se poate dovedi a fi îndrăgostit.. Înțelegem totul..",
    ];

    let typeSurname = 0;

    let nameInput = "";

    const onBuy = () => {
        if (weddingType == 0) {
            if (nameInput.length === 0) {
                window.notificationAdd(4, 9, `Nu ați furnizat ID-ul sau numele persoanei`, 3000);
                return;
            }
            let check;
            check = validate("name", nameInput);
            if (/\D/.test(nameInput) && !check.valid) {
                window.notificationAdd(4, 9, check.text, 3000);
                return;
            }
        }
        if (price > Number ($charMoney)) { 
            window.notificationAdd(4, 9, `Nu ai destui bani`, 3000);
            return;   
        }
        executeClient ("client.wedding.married", nameInput, typeSurname);
    }

</script>
<div id="wedding" class:divorce={weddingType == 1}>
    <div class="wedding__header">Registru</div>
    <div class="wedding__text">{weddingTypeText [weddingType]}</div>
    {#if weddingType === 0}
    <InputCustom setValue={(value) => nameInput = value} value={nameInput} placeholder="Nume sau ID" type="text" icon="auth-user"/>
    <div class="wedding__subtitle">Selectați numele de familie</div>
    <div class="box-flex" style="margin-bottom: 0">
        <div class="wedding__selector" class:active={typeSurname == 0} on:click={() => typeSurname = 0}>Mire</div>
        <div class="wedding__selector" class:active={typeSurname == 1} on:click={() => typeSurname = 1}>Mirese</div>
    </div>
    <div class="box-center">
        <div class="wedding__selector" class:active={typeSurname == 2} on:click={() => typeSurname = 2}>Nu schimba</div>
    </div>
    {/if}
    <div class="wedding__subtitle">${format("money", price)}</div>
    <div class="wedding__text">Costul serviciului</div>
    <div class="wedding__button" on:click={onBuy}>A plati</div>
    <div class="wedding__exit">
        <div class="wedding__exit_text">Ieși</div>
        <div class="wedding__exit_button">ESC</div>
    </div>
</div>