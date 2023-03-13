<template>
  <div class="layout-1">
    <form>
      <div class="title">Sign in to Art of Breaking</div>
      <div class="email-container">
        <label class="email-label">Email</label>
        <input
          class="email-input"
          autocomplete="username"
          name="email"
          type="email"
          placeholder="Your email address"
          required
        />
      </div>

      <div class="password-container">
        <label for="Password" class="password-label">Password</label>
        <div class="password-layout1">
          <input
            class="password-input"
            id="Password"
            :type="passwordType"
            value=""
          />
          <div
            class="password-icon"
            @click="passwordVisible = !passwordVisible"
          >
            <svg
              v-if="!passwordVisible"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
            <svg
              v-if="passwordVisible"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="forget-password-container">forget password?</div>
      <button class="login-form-submit" type="submit">submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const passwordVisible = ref(false);
const passwordType = computed(() => {
  let answer = "";
  if (passwordVisible.value) {
    answer = "text";
  } else {
    answer = "password";
  }
  return answer;
});
</script>

<style lang="scss" scoped>
.layout-1 {
  padding: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-size: 28px;
}

.email-container {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}

.email-label {
  font-size: 14px;
  font-weight: 700;
}

.email-input {
  font-size: 16px;
  border-radius: 8px;
  padding: 14px;
  font-size: 16px;
  border: 1px solid var(--gray-500);

  &:focus {
    outline: none;
    border: 1px solid var(--yellow-800);
  }
}

.login-form-submit {
  width: 100%;
  margin-top: 24px;
  padding: 10px;
  border-radius: 56px;
  background: var(--yellow-500);
  font-size: 16px;
  font-weight: 600;
}

.password-container {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}

.password-label {
  font-size: 14px;
  font-weight: 700;
}

.password-layout1 {
  display: flex;
  border-radius: 8px;
  border: 1px solid var(--gray-500);
  overflow: auto;

  &:focus-within {
    outline: none;
    border: 1px solid var(--yellow-800);
  }
}
.password-input {
  flex-grow: 1;
  font-size: 16px;
  padding: 14px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
}

.password-icon {
  display: grid;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 50px;
}

.forget-password-container {
  font-size: 16px;
  font-weight: 400;
  color: var(--yellow-800);
  cursor: pointer;
  margin-top: 24px;
}

::-ms-reveal {
  display: none;
}
</style>
