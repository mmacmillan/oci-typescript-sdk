/**
 * NetworkLoadBalancer API
 * This describes the network load balancer API.
 * OpenAPI spec version: 20200501
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
* The health status details for the specified network load balancer.
* <p>
This object does not explicitly enumerate backend sets with a status of `OK`. However, the backend sets are included in the
* `totalBackendSetCount` sum.
* 
*/
export interface NetworkLoadBalancerHealth {
  /**
   * The overall health status of the network load balancer.
   * <p>
   *  **OK:** All backend sets associated with the network load balancer return a status of `OK`.
   * <p>
   *  **WARNING:** At least one of the backend sets associated with the network load balancer returns a status of `WARNING`,
   * no backend sets return a status of `CRITICAL`, and the network load balancer life cycle state is `ACTIVE`.
   * <p>
   *  **CRITICAL:** One or more of the backend sets associated with the network load balancer return a status of `CRITICAL`.
   * <p>
   *  **UNKNOWN:** If any one of the following conditions is true:
   * <p>
   *  The network load balancer life cycle state is not `ACTIVE`.
   * <p>
   *  No backend sets are defined for the network load balancer.
   * <p>
   *  More than half of the backend sets associated with the network load balancer return a status of `UNKNOWN`, none of the backend
   *        sets return a status of `WARNING` or `CRITICAL`, and the network load balancer life cycle state is `ACTIVE`.
   * <p>
   *  The system could not retrieve metrics for any reason.
   *
   */
  "status": NetworkLoadBalancerHealth.Status;
  /**
    * A list of backend sets that are currently in the `WARNING` health state. The list identifies each backend set by the
* user-friendly name you assigned when you created the backend set.
* <p>
Example: `example_backend_set3`
* 
    */
  "warningStateBackendSetNames": Array<string>;
  /**
    * A list of backend sets that are currently in the `CRITICAL` health state. The list identifies each backend set by the
* user-friendly name you assigned when you created the backend set.
* <p>
Example: `example_backend_set`
* 
    */
  "criticalStateBackendSetNames": Array<string>;
  /**
    * A list of backend sets that are currently in the `UNKNOWN` health state. The list identifies each backend set by the
* user-friendly name you assigned when you created the backend set.
* <p>
Example: `example_backend_set2`
* 
    */
  "unknownStateBackendSetNames": Array<string>;
  /**
    * The total number of backend sets associated with this network load balancer.
* <p>
Example: `4`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "totalBackendSetCount": number;
}

export namespace NetworkLoadBalancerHealth {
  export enum Status {
    Ok = "OK",
    Warning = "WARNING",
    Critical = "CRITICAL",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: NetworkLoadBalancerHealth): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NetworkLoadBalancerHealth): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
