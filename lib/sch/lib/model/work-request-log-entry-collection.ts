/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Collection of work request logs.
 *
 */
export interface WorkRequestLogEntryCollection {
  /**
   * The list of items.
   *
   */
  "items": Array<model.WorkRequestLogEntry>;
}

export namespace WorkRequestLogEntryCollection {
  export function getJsonObj(obj: WorkRequestLogEntryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WorkRequestLogEntry.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestLogEntryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WorkRequestLogEntry.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
