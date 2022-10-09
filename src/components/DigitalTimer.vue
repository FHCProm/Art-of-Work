<template>
  <div class="digital-timer-container">
    <Transition name="fadeIn" mode="out-in">
      <div v-if="!nextSection && timerStarted" class="time-btn-container">
        <div class="grid-container sm:mt-4">
          <p class="digital-timer-word">00</p>
          <p class="digital-timer-colon">:</p>
          <p class="digital-timer-word">23</p>
          <p class="digital-timer-colon">:</p>
          <p class="digital-timer-word">12</p>
          <p class="digital-timer-label">hour</p>
          <p class="digital-timer-label-empty"></p>
          <p class="digital-timer-label">minute</p>
          <p class="digital-timer-label-empty"></p>
          <p class="digital-timer-label">second</p>
        </div>
        <div class="digital-timer-btn">
          <rounded-button :digitalTimerPause="true"></rounded-button>
        </div>
        <div class="digital-timer-next-section" @click="toggleSection()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div v-else class="selection-creation-container">
        <div
          class="selection-creation-container-section"
          @click="toggleSectionBtn()"
        >
          <svg
            v-if="nextSectionName == 'Go to Goal'"
            class="w-5 h-5"
            viewBox="0 0 85.714058 112.21128"
            version="1.1"
            id="svg5"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <defs id="defs2" />
            <g id="layer1" transform="translate(-68.514943,-81.885443)">
              <g id="g1582" transform="translate(-104.8022,-33.725275)">
                <path
                  style="fill: #fefefe; stroke-width: 0.264583"
                  d="m 181.41854,227.48296 c 0.24226,-0.24226 0.3175,-5.97877 0.3175,-24.20572 v -23.88822 l 36.57864,-0.0698 c 33.47683,-0.0639 36.64643,-0.10698 37.3779,-0.50826 1.17327,-0.64363 2.25344,-1.79946 2.80468,-3.00112 0.45961,-1.00193 0.4858,-2.3568 0.4913,-25.41871 l 0.006,-24.36036 -0.7276,-1.43487 c -0.47633,-0.93934 -1.12366,-1.70956 -1.87442,-2.23026 l -1.14681,-0.79538 -10.49485,-0.21176 c -5.77217,-0.11646 -15.45509,-0.14276 -21.51759,-0.0585 -6.06251,0.0843 -17.87946,0.071 -26.2599,-0.0296 l -15.23735,-0.18287 v -1.35091 c 0,-4.196 -5.20666,-5.65608 -7.78088,-2.18196 l -0.55349,0.74699 -0.068,54.38926 c -0.0502,40.11871 0.0104,54.48373 0.23083,54.74936 0.40011,0.48211 7.37672,0.51996 7.85407,0.0426 z"
                  id="path1598"
                />
                <path
                  style="fill: #f0f0f0; stroke-width: 0.264583"
                  d="m 201.05062,169.72442 v -9.65729 h 9.525 9.525 v 5.64647 c 0,3.10556 0.0781,7.45134 0.1736,9.65729 l 0.17361,4.01082 h -9.69861 -9.6986 z m 38.62917,-1.44206 v -8.21523 h 8.20208 8.20209 v 6.17609 c 0,5.95472 -0.0221,6.21789 -0.61563,7.34219 -0.33859,0.64135 -1.12243,1.52328 -1.74185,1.95984 l -1.12622,0.79375 -6.46023,0.0793 -6.46024,0.0793 z m 19.07089,6.18251 c 0.0127,-0.30823 0.0754,-0.37092 0.15985,-0.15985 0.0764,0.19099 0.067,0.4192 -0.0209,0.50712 -0.0879,0.0879 -0.15045,-0.0684 -0.13896,-0.34727 z m -77.01464,-24.18732 v -9.525 h 9.65729 9.65729 v -9.6573 -9.65729 h -9.70139 c -5.33576,0 -9.62722,-0.0742 -9.53658,-0.1648 0.0906,-0.0906 8.74252,-0.0761 19.22639,0.0324 l 19.06158,0.1972 v 9.62489 9.62491 h -9.525 -9.525 v 9.525 9.52499 h -9.65729 -9.65729 z m 38.62917,0 v -9.525 h 9.525 9.525 v 9.525 9.52499 h -9.525 -9.525 z m 19.31458,-19.1823 v -9.65729 l -9.72344,-0.0613 c -7.65318,-0.0482 -8.34327,-0.0765 -3.24114,-0.13247 3.56526,-0.0391 11.44308,0.0182 17.50627,0.12745 l 11.02399,0.19862 1.14685,0.79539 c 0.75081,0.52072 1.3981,1.29088 1.87445,2.23026 l 0.7276,1.43486 v 7.18729 7.18729 l -4.01081,0.1736 c -2.20595,0.0955 -6.55174,0.17361 -9.6573,0.17361 h -5.64647 z m -59.30042,-14.35364 c -0.3291,-0.41964 -0.31975,-0.429 0.0999,-0.0999 0.44073,0.34564 0.58089,0.56292 0.36313,0.56292 -0.0549,0 -0.2633,-0.20836 -0.46302,-0.46303 z"
                  id="path1596"
                />
                <path
                  style="fill: #d0d2d3; stroke-width: 0.264583"
                  d="m 239.67979,177.95806 v -1.46047 l 6.46024,-0.0793 6.46023,-0.0793 1.12622,-0.79375 c 0.61942,-0.43656 1.40326,-1.31849 1.74185,-1.95984 0.59356,-1.1243 0.61563,-1.38747 0.61563,-7.34219 v -6.17609 h 1.47362 1.47362 l -0.0846,7.47448 c -0.0799,7.05976 -0.11616,7.53319 -0.65412,8.53281 -0.66004,1.22645 -1.43672,1.98705 -2.73773,2.68103 -0.82888,0.44214 -1.7103,0.50284 -8.40052,0.57853 l -7.47448,0.0846 z m -19.51753,-10.8116 -0.0616,-7.07588 -19.24844,-0.0696 c -15.44385,-0.0559 -13.53536,-0.0824 9.65557,-0.13402 l 28.904,-0.0644 0.0696,-19.24843 0.0696,-19.24844 0.0644,19.24412 0.0644,19.24411 7.0776,0.075 7.07761,0.075 -7.07321,0.0616 -7.07321,0.0616 -0.0751,6.94531 -0.0751,6.94531 -0.0616,-6.94531 -0.0616,-6.94531 h -9.52068 -9.52068 l -0.075,7.0776 -0.075,7.07761 z m 0.0581,-36.05121 c 8e-5,-5.38427 0.0354,-7.54937 0.0784,-4.81134 0.043,2.73804 0.043,7.14335 -1.5e-4,9.78959 -0.0431,2.64623 -0.0783,0.40603 -0.0783,-4.97825 z m 34.73912,9.46223 c 0.76398,-0.0534 2.01414,-0.0534 2.77812,0 0.76399,0.0534 0.13891,0.0972 -1.38906,0.0972 -1.52797,0 -2.15305,-0.0437 -1.38906,-0.0972 z"
                  id="path1594"
                />
                <path
                  style="fill: #fec66a; stroke-width: 0.264583"
                  d="m 180.69975,227.72559 c 0.0606,-0.0412 0.34837,-0.24954 0.63941,-0.46302 0.48949,-0.35904 0.50194,-0.35343 0.16605,0.0749 -0.19972,0.25466 -0.48746,0.46302 -0.63941,0.46302 -0.15196,0 -0.22668,-0.0337 -0.16605,-0.0749 z m -7.30061,-54.69388 c 0,-29.75901 0.0309,-41.93315 0.0687,-27.05364 0.0378,14.8795 0.0378,39.22778 0,54.10729 -0.0378,14.8795 -0.0687,2.70536 -0.0687,-27.05365 z M 174.46,116.94005 c 0.26339,-0.29104 0.53842,-0.52917 0.61118,-0.52917 0.0728,0 -0.0832,0.23813 -0.3466,0.52917 -0.26339,0.29104 -0.53842,0.52916 -0.61118,0.52916 -0.0728,0 0.0832,-0.23812 0.3466,-0.52916 z m 2.19935,-1.23908 c 0.19099,-0.0764 0.4192,-0.067 0.50712,0.0209 0.0879,0.0879 -0.0684,0.15046 -0.34727,0.13897 -0.30823,-0.0127 -0.37092,-0.0754 -0.15985,-0.15985 z"
                  id="path1592"
                />
                <path
                  style="fill: #fec71b; stroke-width: 0.264583"
                  d="m 175.80181,209.39302 c -0.50527,-0.50528 -0.51438,-0.67114 -0.0702,-1.27858 0.4933,-0.67462 1.61375,-0.46689 1.72528,0.31985 0.1659,1.17026 -0.85319,1.76059 -1.65506,0.95873 z m 0,-4.23334 c -0.37448,-0.37448 -0.41577,-4.58666 -0.41577,-42.41505 0,-45.18604 -0.0666,-43.05138 1.33774,-42.85315 l 0.64664,0.0913 0.067,42.43754 c 0.0491,31.14551 -0.0123,42.53302 -0.23084,42.79635 -0.39341,0.47404 -0.89402,0.45374 -1.40472,-0.057 z"
                  id="path1590"
                />
                <path
                  style="fill: #fea819; stroke-width: 0.264583"
                  d="m 173.99698,227.51468 c -0.4386,-0.25546 -0.46302,-3.13546 -0.46302,-54.58928 v -54.3196 l 0.59621,-0.88472 c 1.82063,-2.70163 5.66845,-2.49947 7.05793,0.37081 l 0.54794,1.13189 v 53.87646 53.87646 l -0.58804,0.41188 c -0.45157,0.3163 -1.29583,0.41001 -3.63802,0.40383 -1.67749,-0.004 -3.25834,-0.1294 -3.513,-0.27773 z m 3.22906,-18.0882 c 0.17451,-0.21027 0.27838,-0.65675 0.23083,-0.99219 -0.11153,-0.78674 -1.23198,-0.99447 -1.72528,-0.31985 -0.44416,0.60744 -0.43505,0.7733 0.0702,1.27858 0.51825,0.51824 1.01226,0.52985 1.42423,0.0335 z m -0.0195,-4.20984 c 0.21855,-0.26333 0.27997,-11.65084 0.23083,-42.79635 l -0.067,-42.43753 -0.64663,-0.0913 c -1.40438,-0.19823 -1.33774,-2.33289 -1.33774,42.85314 0,37.82839 0.0413,42.04057 0.41577,42.41505 0.5107,0.5107 1.01131,0.531 1.40472,0.057 z"
                  id="path1588"
                />
                <path
                  style="fill: #57585a; stroke-width: 0.264583"
                  d="m 186.58199,179.18357 c 2.73803,-0.043 7.14335,-0.043 9.78958,1.5e-4 2.64624,0.0431 0.40603,0.0783 -4.97824,0.0782 -5.38427,-8e-5 -7.54937,-0.0354 -4.81134,-0.0784 z m 43.24207,-1.9e-4 9.59115,-0.0728 v -2.51024 -2.51025 h -9.525 -9.525 v -7.01145 -7.01146 h 9.525 9.525 l 7.9e-4,5.4901 c 5.3e-4,3.01956 0.0787,7.36534 0.17371,9.65729 l 0.17293,4.16719 -9.76486,-0.0627 -9.76486,-0.0627 z m -48.08802,-12.10479 v -7.01146 h 9.65729 9.65729 v 7.01146 7.01145 h -9.65729 -9.65729 z m 65.02135,-7.20971 -7.0776,-0.075 v -9.52068 -9.52067 h 7.01146 7.01146 v 9.525 9.52499 h 2.51024 2.51024 l 0.0728,-9.59114 0.0728,-9.59115 0.0627,9.72344 0.0627,9.72344 -2.57969,-0.0616 c -1.41882,-0.0339 -5.7646,-0.0954 -9.65729,-0.13661 z m -45.70677,-9.59133 v -9.525 h -9.65729 -9.65729 v -9.6573 -9.65729 h 9.65729 9.65729 v 9.65729 9.6573 h 9.65729 9.6573 v -9.6573 -9.65729 h 9.525 9.525 v 9.65729 9.6573 h -9.525 -9.525 v 9.525 9.52499 h -9.6573 -9.65729 z"
                  id="path1586"
                />
                <path
                  style="fill: #403f41; stroke-width: 0.264583"
                  d="m 181.73604,176.60359 v -2.51355 h 9.65729 9.65729 v 2.51355 2.51354 h -9.65729 -9.65729 z m 38.62917,0 v -2.51355 h 9.525 9.525 v 2.51355 2.51354 h -9.525 -9.525 z m 33.3375,-26.32604 v -9.525 h 2.51354 2.51354 v 9.525 9.52499 h -2.51354 -2.51354 z"
                  id="path1584"
                />
              </g>
            </g>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z"
            />
          </svg>

          {{ nextSectionName }}
        </div>
        <svg-button :digitalTimerAddTask="true"></svg-button>
        <svg
          @click="toggleSection()"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 selection-creation-container-back"
        >
          <path
            fill-rule="evenodd"
            d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </Transition>

    <!-- <div v-if="!timerStarted" class="timer-task-creator">
      <rectangle-button
        :digitalTimer2="true"
        :containSVG="false"
        label="Create New Task"
      ></rectangle-button>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { computed, onMounted } from "vue";
import RectangleButton from "./buttons/RectangleButton.vue";
import RoundedButton from "./buttons/RoundedButton.vue";
import SvgButton from "./buttons/SvgButton.vue";

const timerStarted = ref(true);
const nextSection = ref(false);
let currentSectionName = ref("Go to Task");
// let nextSectionName =
//   currentSectionName.value == "Go to Task" ? "Go to Goal" : "Go to Task";

const nextSectionName = computed(() => {
  return currentSectionName.value == "Go to Task" ? "Go to Goal" : "Go to Task";
});

const emit = defineEmits({
  VisibleSectionUpdate: null,
});

function toggleSection() {
  nextSection.value = !nextSection.value;
}

function toggleSectionBtn() {
  currentSectionName.value =
    currentSectionName.value == "Go to Task" ? "Go to Goal" : "Go to Task";
  emit("VisibleSectionUpdate", currentSectionName.value);
}

onMounted(() => {});
</script>

<style scoped lang="scss">
.digital-timer-container {
  width: 100%;
  height: 4rem;
  position: sticky;
  color: var(--gray-900);
  top: 0;
  background: var(--gray-300);
  box-shadow: $container-shadow;
}

.time-btn-container {
  display: grid;
  grid-template-columns: 70% 20% 10%;
  height: 100%;
  align-items: center;
  justify-items: center;
}

.grid-container {
  grid-template-columns: 1fr 0.5fr 1fr 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr 0px;
  display: grid;
  align-items: center;
  justify-items: center;
}

.timer-task-creator {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
}

.digital-timer-word {
  font-size: 1rem;
  font-family: "OCR_A_Extended";

  &:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: end;
  }
  &:nth-child(3) {
    grid-column: 3/4;
    grid-row: 1/2;
    justify-self: end;
  }
  &:nth-child(5) {
    justify-self: end;
    grid-column: 5/6;
    grid-row: 1/2;
  }
}

.digital-timer-colon {
  display: none;
}

.digital-timer-label {
  font-size: 1rem;
  font-family: "Italiana", serif;

  &:nth-child(6) {
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: flex-end;
  }
  &:nth-child(8) {
    grid-column: 4/5;
    grid-row: 1/2;
    align-self: flex-end;
  }
  &:nth-child(10) {
    grid-column: 6/7;
    grid-row: 1/2;
    align-self: flex-end;
  }
}

.digital-timer-label-empty {
  display: none;
}

.digital-timer-btn {
  display: grid;
  align-items: center;
  justify-items: center;
}
.digital-timer-next-section {
  //align-self: flex-end;
}

.selection-creation-container {
  display: grid;
  grid-template-columns: 45% 45% 10%;
  align-items: center;
  justify-items: center;

  height: 100%;
  &-back {
  }
  &-section {
    display: flex;
  }

  &-btn {
    margin: 0 auto;
  }
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: all 0.5s ease;
}

.fadeIn-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.fadeIn-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

@media screen and (min-width: $breakpoint-small) {
  .digital-timer-container {
    width: 95%;
    height: 90%;
    position: relative;
    background: var(--gray-300);
    // border: 1px solid white;
    box-shadow: $container-shadow;
  }

  .grid-container {
    flex-basis: 50%;
    width: 100%;
    grid-template-columns: 1fr 20px 1fr 20px 1fr;
    grid-template-rows: 1fr 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
  }
  .time-btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }

  .digital-timer-word {
    font-size: 2rem;
    &:nth-child(1) {
      justify-self: center;
    }
    &:nth-child(3) {
      justify-self: center;
    }
    &:nth-child(5) {
      justify-self: center;
    }
  }

  .digital-timer-colon {
    display: unset;
    font-size: 1rem;

    font-family: "OCR_A_Extended";
  }

  .digital-timer-label {
    &:nth-child(6) {
      grid-column: 1/2;
      grid-row: 2/3;
      align-self: center;
    }
    &:nth-child(8) {
      grid-column: 3/4;
      grid-row: 2/3;
      align-self: center;
    }
    &:nth-child(10) {
      grid-column: 5/6;
      grid-row: 2/3;
      align-self: center;
    }
  }
  .digital-timer-label-empty {
    display: unset;
  }

  .digital-timer-btn {
    flex-basis: 50%;
  }
  .digital-timer-next-section {
    display: none;
  }

  .selection-creation-container {
    grid-template-columns: 1fr;
    &-back {
      display: none;
    }
    &-section {
      display: none;
    }
  }
}
</style>
