/**
 * Identity and Access Management Data Plane API
 * APIs for managing identity data plane services. For example, use this API to create a scoped-access security token. To manage identity domains (for example, creating or deleting an identity domain) or to manage resources (for example, users and groups) within the default identity domain, see [IAM API](https://docs.oracle.com/iaas/api/#/en/identity/).
 * OpenAPI spec version: v1
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

export interface AuthorizationRequest {
  /**
   * The id of this request. It is a GUID.
   */
  "requestId": string;
  /**
   * The user principal object
   */
  "userPrincipal": model.Principal;
  /**
   * The service principal object for service to service calls.
   */
  "svcPrincipal": model.Principal;
  /**
   * The name of the service that is making this authorization request
   */
  "serviceName": string;
  /**
   * A set of permission contexts
   */
  "context": Array<model.PermissionContext>;
  /**
   * The hash of cached policy on the caller service side. If this is different than what Identity has, it will
   * send the most recent policy statements.
   *
   */
  "policyHash": string;
}

export namespace AuthorizationRequest {
  export function getJsonObj(obj: AuthorizationRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "userPrincipal": obj.userPrincipal
          ? model.Principal.getJsonObj(obj.userPrincipal)
          : undefined,
        "svcPrincipal": obj.svcPrincipal ? model.Principal.getJsonObj(obj.svcPrincipal) : undefined,

        "context": obj.context
          ? obj.context.map(item => {
              return model.PermissionContext.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuthorizationRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "userPrincipal": obj.userPrincipal
          ? model.Principal.getDeserializedJsonObj(obj.userPrincipal)
          : undefined,
        "svcPrincipal": obj.svcPrincipal
          ? model.Principal.getDeserializedJsonObj(obj.svcPrincipal)
          : undefined,

        "context": obj.context
          ? obj.context.map(item => {
              return model.PermissionContext.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
