<template>
  <main class="main-container">
    <section class="first-section">
      <div class="first-section-content">
        <div class="first-section-words">
          <h1 class="words-first-part">
            <span>Time Tracker for Projects</span>
          </h1>
          <div class="words-second-part">
            <h3 class="second-part-word">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              delectus!
            </h3>
          </div>
          <div class="words-third-part">
            <button class="third-part-button">Get Started</button>
          </div>
        </div>
        <div class="first-section-image-container">
          <div>
            <div class="first-section-image"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="second-section">
      <div class="second-section-layout">
        <div class="second-section-content">
          <table class="table-layout">
            <tbody class="table-body">
              <tr class="table-row">
                <td class="image-column">
                  <div class="image-column-layout">
                    <div class="image-frame">
                      <img
                        class="image-adjustment"
                        src="@/assets/officialPage/section2-2.jpg"
                      />
                    </div>
                    <div class="image-details">Ashley</div>
                  </div>
                </td>
                <td class="details-layout">
                  <div class="detail-column">Lorem ipsum dolor sit.</div>
                  <div class="time-column">1 hour 5 minutes</div>
                </td>
              </tr>
              <tr class="table-row">
                <td class="image-column">
                  <div class="image-column-layout">
                    <div class="image-frame">
                      <img
                        class="image-adjustment"
                        src="@/assets/officialPage/section2-1.jpg"
                      />
                    </div>
                    <div class="image-details">John</div>
                  </div>
                </td>
                <td class="details-layout">
                  <div class="detail-column">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </div>
                  <div class="time-column">2 hour 25 minutes</div>
                </td>
              </tr>

              <tr class="table-row">
                <td class="image-column">
                  <div class="image-column-layout">
                    <div class="image-frame">
                      <img
                        class="image-adjustment"
                        src="@/assets/officialPage/section2-3.jpg"
                      />
                    </div>
                    <div class="image-details">Lily</div>
                  </div>
                </td>
                <td class="details-layout">
                  <div class="detail-column">Lorem, ipsum dolor.</div>
                  <div class="time-column">15 minutes</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

let taskIsRunning = ref(false);
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  margin: 0;
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
  flex: 1 1 0%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 80px;
}

.words-second-part {
  display: flex;
  padding-right: 1rem;

  justify-content: space-between;
}

.second-part-word {
  font-size: 1.5rem;
}

.words-first-part {
  display: flex;
  max-width: 500px;
  font-size: 35px;
  font-weight: 500;
  line-height: 1.4;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.words-third-part {
  padding: 4rem 0;
}

.third-part-button {
  background: var(--yellow-500);
  font-size: 1.5rem;
  padding: 1rem 2rem;
  color: var(--gray-100);
  cursor: pointer;
  border-radius: var(--button-border-radius);

  &:focus {
    box-shadow: var(--gray-100) 0px 0px 0px 2px,
      var(--yellow-500) 0px 0px 0px 4px;
  }
}

.first-section-image-container {
  display: none;
}

.first-section-image {
  position: absolute;
  background-position-x: 70%;
  width: 100%;
  height: 100%;
  background-image: url(../assets/officialPage/hero-section-img.jpg);
}

.second-section {
  position: relative;
}
.second-section-layout {
  flex-direction: column;
  padding: 0px;
  max-width: 1142px;
  margin: auto;
}

.second-section-content {
  width: 100%;
  border-right: 0px;
  border-left: 0px;
  margin-top: -1px;
  overflow-x: auto;
}

.table-layout {
  width: 100%;
  padding: 0px;
  border-spacing: 0px;
  border-collapse: separate;
  caption-side: top;
  border-left: 1px solid var(--gray-300);
  border-right: 1px solid var(--gray-300);
}

.table-body {
  border: none;
  transition: opacity 300ms ease 0s;
  transform: translateZ(0px);
}

.table-row {
  user-select: none;
}

.image-column {
  border-top: 1px solid var(--gray-300);
  min-width: 140px;
  cursor: pointer;
  padding: 14px 24px 14px 24px;
}

.image-column-layout {
  @include font-body;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.image-frame {
}

.image-adjustment {
  border-radius: 100%;
  height: 36px;
  width: 36px;
}

.image-details {
  padding: 0 0.5rem;
}

.details-layout {
  @include font-body;
  border-top: 1px solid var(--gray-300);
  display: flex;
  flex-direction: column;
}

.detail-column {
}

.time-column {
  @include font-label;
  color: var(--teal-800);
}

@media screen and (min-width: $breakpoint-small) {
  .first-section-words {
    padding-top: 100px;
    padding-bottom: 111px;
  }
  .first-section-image-container {
    display: unset;
    position: relative;
    width: 600px;
    height: 500px;
    overflow: hidden;
  }

  .words-first-part {
    font-size: 62px;
    min-width: 480px;
  }

  .details-layout {
    flex-direction: row;
    height: 65px;
    align-items: center;
  }

  .detail-column {
    width: 100%;
  }
  .time-column {
    width: 200px;
  }
}
</style>
