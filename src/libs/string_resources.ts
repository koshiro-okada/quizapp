export const stringResources = (() => {
  const resources = {
    systemName: "quizapp",
    signInWithGoogle: "Google アカウントでサインインしてください",
    signout: "サインアウト",
  } as const;
  return {
    ...resources,
  };
})();
