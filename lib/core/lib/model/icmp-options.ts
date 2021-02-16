/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
* Optional and valid only for ICMP and ICMPv6. Use to specify a particular ICMP type and code
* as defined in:
* - [ICMP Parameters](http://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml)
* - [ICMPv6 Parameters](https://www.iana.org/assignments/icmpv6-parameters/icmpv6-parameters.xhtml)
* <p>
If you specify ICMP or ICMPv6 as the protocol but omit this object, then all ICMP types and
* codes are allowed. If you do provide this object, the type is required and the code is optional.
* To enable MTU negotiation for ingress internet traffic via IPv4, make sure to allow type 3 (\"Destination
* Unreachable\") code 4 (\"Fragmentation Needed and Don't Fragment was Set\"). If you need to specify
* multiple codes for a single type, create a separate security list rule for each.
* 
*/
export interface IcmpOptions {
  /**
   * The ICMP code (optional). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "code"?: number;
  /**
   * The ICMP type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "type": number;
}

export namespace IcmpOptions {
  export function getJsonObj(obj: IcmpOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
