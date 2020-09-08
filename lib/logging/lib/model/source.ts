/**
 * loggingManagementControlplane API
 * loggingManagementControlplane API specification
 * OpenAPI spec version: 20200531
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The source the log object comes from.
 */
export interface Source {
  "sourceType": string;
}

export namespace Source {
  export function getJsonObj(obj: Source): object {
    const jsonObj = { ...obj, ...{} };

    if ("sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "OCISERVICE":
          return model.OciService.getJsonObj(<model.OciService>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.sourceType);
      }
    }
    return jsonObj;
  }
}
