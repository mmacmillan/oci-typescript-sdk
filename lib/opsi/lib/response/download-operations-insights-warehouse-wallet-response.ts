/**
 *
 *
 * OpenAPI spec version: 20200630
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
import stream = require("stream");

export interface DownloadOperationsInsightsWarehouseWalletResponse {
  /**
   * For optimistic concurrency control. See `if-match`.
   */
  "etag": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * Size of the file.
   */
  "contentLength": number;
  /**
   * The date and time the wallet was created, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "lastModified": Date;
  /**
   * The returned stream.Readable | ReadableStream instance.
   */
  "value": stream.Readable | ReadableStream;
}
