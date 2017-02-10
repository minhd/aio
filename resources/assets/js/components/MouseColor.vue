<template>
    <div class="mousecolor-container">
        <div v-on:click.capture="generate" class="mousecolor-area hero"></div>
        <span class="mousecolor-text">
            {{ hex }}
        </span>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                color:'',
                hex: '',
            }
        },
        mounted() {
            this.generate()
        },
        methods: {
            generate: function() {
                let elem = document.getElementsByClassName("mousecolor-area")[0];
                this.color = this.randomColor();
                this.hex = this.rgbToHex(this.color);
                elem.style.backgroundColor = this.color;
            },
            randomColor() {
                let r = this.randomValue();
                let g = this.randomValue();
                let b = this.randomValue();
                return "rgb("+r+", "+g+", "+b+")";
            },
            randomValue() {
                return Math.floor(Math.random() * 255) + 1
            },
            rgbToHex(rgb) {
                rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                return (rgb && rgb.length === 4) ? "#" +
                    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
                    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
                    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
            }
        }
    }
</script>

<style lang="scss">
    .mousecolor-container {
        position: relative;
    }
    .mousecolor-area {
        background-color:black;
        width: 100%;
        height: 340px;
        min-height: 340px;
    }
    .mousecolor-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(200, 200, 200, 0.5);
        color: black;
        padding: 10px 20px;
        border-radius: 10px;
        text-shadow: 0 0 #fcfcfc;
    }
</style>