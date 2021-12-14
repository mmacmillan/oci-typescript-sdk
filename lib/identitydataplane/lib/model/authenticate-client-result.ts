/**
 * Identity Service
 * API for the Identity Dataplane
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface AuthenticateClientResult {
  /**
   * The original caller's resolved principal object if the authentication succeeds, null otherwise.
   */
  "principal"?: model.Principal;
  /**
   * If the authentication fails for the original caller (not failing authentication of the calling service, in which case we return 401), we return a 200, but with null principal and an error message
   */
  "errorMessage"?: string;
}

export namespace AuthenticateClientResult {
  export function getJsonObj(obj: AuthenticateClientResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "principal": obj.principal ? model.Principal.getJsonObj(obj.principal) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuthenticateClientResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "principal": obj.principal
          ? model.Principal.getDeserializedJsonObj(obj.principal)
          : undefined
      }
    };

    return jsonObj;
  }
}
