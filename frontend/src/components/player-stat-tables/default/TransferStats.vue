<template>
    <div class="transfer-stats">
        <h1 class="title">Transfer stats</h1>
        <table class="table">
            <tr>
                <td class="label">Value</td>
                <td class="data">
                    {{ marketValue }}
                </td>
            </tr>
            <tr>
                <td class="label">Wage</td>
                <td class="data">{{ wage }}</td>
            </tr>
            <tr>
                <td class="label">Contract End</td>
                <td class="data">{{ player.contractEndDate }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TransferStats',
    props: ['player'],
    methods: {},
    created() {
    },
    computed: {
        marketValue() {
            if(!this.player.marketValue) {
                return '£'
            } else {
                return '£' + this.player.marketValue.toLocaleString('en-GB')
            }
        },
        wage() {
            if(!this.player.wage){
                return '£'
            } else {
                return '£' + this.player.wage.toLocaleString('en-GB')
            }
            
        },
    }
}
</script>

<style scoped>
.transfer-stats {
    box-shadow: 0 0 20px #9e9e9e;
    padding: 20px;
    background-color: white;
}

.title {
    margin: 0 auto;
}

.table {
    margin: 0 auto;
}

.label {
    text-align: left;
}

.data {
    text-align: right;
}

td {
    padding: 15px;
}
</style>
