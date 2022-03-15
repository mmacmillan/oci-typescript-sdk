/**
 * Management Agent API
 * Use the Management Agent API to manage your infrastructure's management agents, including their plugins and install keys.
For more information, see [Management Agent](https://docs.cloud.oracle.com/iaas/management-agents/index.html).

 * OpenAPI spec version: 20200202
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Supported edit modes for config.
 **/
export enum EditModes {
  ReadOnly = "READ_ONLY",
  Writable = "WRITABLE",
  Extensible = "EXTENSIBLE"
}

export namespace EditModes {
  export function getJsonObj(obj: EditModes): EditModes {
    return obj;
  }
  export function getDeserializedJsonObj(obj: EditModes): EditModes {
    return obj;
  }
}
