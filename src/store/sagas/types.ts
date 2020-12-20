import { AllEffect, ForkEffect } from 'redux-saga/effects';

type AllEffectType = AllEffect<Generator<ForkEffect<never>, void, unknown>>

export type RootSagaReturnType = Generator<AllEffectType, void, unknown>;
