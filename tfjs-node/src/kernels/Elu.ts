/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {Elu, EluInputs, KernelConfig} from '@tensorflow/tfjs';

import {NodeJSKernelBackend} from '../nodejs_kernel_backend';

export const eluConfig: KernelConfig = {
  kernelName: Elu,
  backendName: 'tensorflow',
  kernelFunc: (args) => {
    const {x} = args.inputs as EluInputs;
    const backend = args.backend as NodeJSKernelBackend;

    return backend.executeSingleInput(Elu, x);
  }
};
