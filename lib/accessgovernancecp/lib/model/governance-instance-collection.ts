/**
 * Access Governance APIs
 * Use the Oracle Access Governance API to create, view, and manage GovernanceInstances.
 * OpenAPI spec version: 20220518
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
 * Results of a GovernanceInstance search.
 */
export interface GovernanceInstanceCollection {
  /**
   * List of GovernanceInstances.
   */
  "items": Array<model.GovernanceInstanceSummary>;
}

export namespace GovernanceInstanceCollection {
  export function getJsonObj(obj: GovernanceInstanceCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.GovernanceInstanceSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GovernanceInstanceCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.GovernanceInstanceSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
