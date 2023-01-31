<template>
  <main class="main-container">
    <section class="first-section">
      <div class="first-section-content">
        <div class="first-section-words">
          <div class="words-first-part">
            <h3 class="first-part-word">Task</h3>
            <div class="first-part-timer">
              <div class="timer-min">1 min</div>
              <div class="timer-second">20 s</div>
            </div>
          </div>

          <h1 class="words-second-part">
            <span>Write down your goals and tasks to love it</span>
          </h1>
          <div class="words-third-part">
            <button class="third-part-button">Get Started</button>
          </div>
        </div>
        <div class="first-section-play">
          <div class="play-circle">
            <div class="play-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped lang="scss">
@media screen and (min-width: $breakpoint-small) {
  .main-container {
    display: flex;
    flex-direction: column;
  }

  .first-section {
    overflow: hidden;
    max-width: 1142px;
    padding-left: 56px;
    padding-right: 56px;
    display: flex;
    flex-shrink: 0;
    width: 100%;
    margin: 0px auto;
    padding: 24px;
  }

  .first-section-content {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .first-section-words {
    padding-top: 100px;
    padding-bottom: 111px;
    flex: 1 1 0%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .words-first-part {
    display: flex;
    padding-right: 1rem;
    width: 220px;
    justify-content: space-between;
  }

  .first-part-word {
    font-size: 1.5rem;
  }

  .first-part-timer {
    display: flex;
    color: white;
    width: 120px;
    justify-content: space-around;
    background: var(--gray-900);
    align-items: baseline;
  }
  .timer-min {
    font-size: 1.5rem;
  }
  .timer-second {
    font-size: 1rem;
  }

  .words-second-part {
    min-width: 480px;
    max-width: 500px;
    font-size: 62px;
    font-weight: 500;
    line-height: 1.4;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .words-third-part {
    padding: 4rem 0;
  }

  .third-part-button {
    background: var(--teal-500);
    font-size: 1.5rem;
    padding: 1rem 2rem;
    color: var(--gray-100);
    cursor: pointer;
    border-radius: var(--button-border-radius);

    &:focus {
      box-shadow: var(--gray-100) 0px 0px 0px 2px,
        var(--teal-500) 0px 0px 0px 4px;
    }
  }

  .first-section-play {
    display: flex;
    width: 600px;
    justify-content: center;
    flex: 2 1 0%;
    padding-bottom: 10rem;
  }

  .play-circle {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    position: relative;
    border: 5px solid var(--teal-500);
  }

  .play-button {
    position: absolute;
    left: 56px;
    top: 47px;
    width: 150px;
    height: 150px;
    color: var(--teal-700);
  }
}
</style>
