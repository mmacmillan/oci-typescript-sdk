/**
 *
 *
 * OpenAPI spec version: 20170115
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

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loadbalancer/UpdateRoutingPolicy.ts.html |here} to see how to use UpdateRoutingPolicyRequest.
 */
export interface UpdateRoutingPolicyRequest extends common.BaseRequest {
  /**
   * The configuration details needed to update a routing policy.
   */
  "updateRoutingPolicyDetails": model.UpdateRoutingPolicyDetails;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the load balancer associated with the routing policy to update.
   */
  "loadBalancerId": string;
  /**
 * The name of the routing policy to update.
* <p>
Example: `example_routing_policy_name`
* 
 */
  "routingPolicyName": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations (e.g., if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * may be rejected).
   *
   */
  "opcRetryToken"?: string;
}
