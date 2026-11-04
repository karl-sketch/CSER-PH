# CSER PH

A responsive Civil Service Examination reviewer prototype with four combat-themed phases:

- Verbal Ability
- Numerical Ability
- Logical Reasoning
- General Information

Each phase includes 50 questions and 50 progression levels. Encounters ask up to four questions; three correct answers win. Each question has a time limit: one minute in Phases 1, 3, and 4, and two minutes in Phase 2. A timeout counts as a missed answer. Correct answers award XP, while missed answers show the right answer and an explanation.

The learner's profile avatar appears beside one of 20 player-only fantasy heroes, randomly selected for each phase level from transparent cutouts of the supplied hero image in `player-heroes/`. Each phase level also gets a randomly selected examiner from 20 transparent character portraits in `examiners/`. Both character sets are prepared as 4× PNGs with smoothed transparency, subtle color/contrast tuning, and edge sharpening for high-density displays. Each character keeps its selection if the learner retries the same level and respawns with a new portrait after advancing. The portraits retain idle, attack, damage, and respawn animations. Upscaling improves display clarity but cannot add detail that was not present in the supplied images.

Background music uses the supplied `audio/background-music.wav` track, converted to stereo PCM WAV and played through Web Audio for compatibility with the embedded browser. It loops while enabled and starts when the learner presses the music button. Combat sound effects remain synthesized separately and include a layered sword-swing and metallic impact for hero attacks, plus a heavier impact for damage; the sound-effects button controls them. Browsers require a user gesture before audio can play.

## Run locally

Open `index.html` in a modern browser. New visitors see the landing page and must create an account or log in before the reviewer is shown. A signed-in local account stays active across refreshes until the user logs out. No build step or package installation is required.

## Demo-mode storage and security

This standalone prototype stores learner profiles, progress, and uploaded avatars in the browser's local storage. Passwords are PBKDF2-hashed in the browser, but this is **not server-backed authentication** and the landing-page gate is only a client-side UI gate; it is not access control. Local storage is not a secure account database. Do not use a real or reused password. A production deployment should replace this demo account flow with a server-side authentication service, authorization checks, and managed database/object storage.

Uploaded avatars are limited to PNG, JPEG, or WebP files up to 1 MB. The account deletion action removes that local account and its saved progress from the current browser.
