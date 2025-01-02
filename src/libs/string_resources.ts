export const stringResources = (() => {
  const resources = {
    systemName: "quizapp",
    signInWithGoogle: "Google アカウントでサインインしてください",
  } as const;
  return {
    ...resources,
  };
})();
